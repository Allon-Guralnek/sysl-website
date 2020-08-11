---
id: formats-spanner
title: Spanner
sidebar_label: Spanner
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Sysl supports the importing of [Google Cloud Spanner](https://cloud.google.com/spanner) database schemas.

<table>
<tr><td><b>Spanner</b></td><td><b>Sysl</b></td></tr>
<tr valign="top">
<td>

```sql
CREATE DATABASE Music
CREATE TABLE Singers (
  SingerId   INT64 NOT NULL,
  FirstName  STRING(1024),
  LastName   STRING(1024),
) PRIMARY KEY (SingerId);
```
</td>
<td>

```sysl
Music:
  !table Singers:
    SingerId <: int64 [~pk]
    FirstName <: string(1024)?
    LastName <: string(1024)?
```
</td>
</tr>
</table>

# Convert

A Spanner schema can be converted to a Sysl file using the `sysl import` command:

```bash
sysl import -i example.sql
```

#### Required Flags

- `-i, --input=<SCHEMA>` The schema to import


#### Optional flags

- `-a, --app-name=<APP-NAME>` The name of the Sysl app. Required if the schema doesn't include a `CREATE DATABASE` statement.
- `-p, --package=<PACKAGE>` The name of the Sysl package.
- `-o, --output=<OUT.SYSL>` The output filename.


# Import

A Spanner schema can be imported into a Sysl file using an import statement: 
<!-- TODO: document how the -a and -p flags from the importer are supported -->

```sysl
import music.sql

App:
  /singers:
    GET ?name=string:
      return Music.Singers
```

# Specification

This section describes how a spanner schema is represented in Sysl. 
For the purpose of data modelling, the representation is limited to [create database](https://cloud.google.com/spanner/docs/data-definition-language#create_database), [create table](https://cloud.google.com/spanner/docs/data-definition-language#create_table) and [create index](https://cloud.google.com/spanner/docs/data-definition-language#create-index) statements.

## Data types

Spanner [data types](https://cloud.google.com/spanner/docs/data-definition-language#data_types) (shown below) are encoded as the following Sysl types:

```sql
{ BOOL | INT64 | FLOAT64 | STRING( length ) | BYTES( length ) | DATE | TIMESTAMP }

length:
    { int64_value | MAX }

int64_value:
    { decimal_value | hex_value }

decimal_value:
    [-]0—9+

hex_value:
    [-]0x{0—9|a—f|A—F}+
```

<table>
<tr><td><b>Spanner</b></td><td><b>Sysl</b></td></tr>
<tr valign="top">
<td>

[ARRAY](https://cloud.google.com/spanner/docs/data-types#array_type)
</td>
<td>
sequence
</td>
</tr>
<tr valign="top">
<td>

[BYTES](https://cloud.google.com/spanner/docs/data-types#bytes_type)
</td>
<td>
bytes

Byte fields of a fixed `length` will be encoded on the field and byte fields of the `MAX` length will be encoded as an annotation:
```sysl
b <: bytes(1024)
b <: bytes [~max]
```
</td>
</tr>
<tr valign="top">
<td>

[BOOL](https://cloud.google.com/spanner/docs/data-types#boolean_type)
</td>
<td>
bool
</td>
</tr>
<tr valign="top">
<td>

[DATE](https://cloud.google.com/spanner/docs/data-types#date_type)
</td>
<td>
date
</td>
</tr>
<tr valign="top">
<td>

[FLOAT64](https://cloud.google.com/spanner/docs/data-types#floating_point_type)
</td>
<td>
float64
</td>
</tr>
<tr valign="top">
<td>

[INT64](https://cloud.google.com/spanner/docs/data-types#integer_type)
</td>
<td>
int64

Integer fields of `hex_value` will be encoded as an annotation:

```sysl
v <: int64 [~hex]
```
</td>
</tr>
<tr valign="top">
<td>

[STRING](https://cloud.google.com/spanner/docs/data-types#string_type)
</td>
<td>
string

String fields of a fixed `length` will be encoded on the field and string fields of the `MAX` length will be encoded as an annotation:

```sysl
s <: string(100)
s <: string [~max]
```
</td>
</tr>
<tr valign="top">
<td>

[TIMESTAMP](https://cloud.google.com/spanner/docs/data-types#timestamp_type)
</td>
<td>
datetime
</td>
</tr>
<tr valign="top">
<td>

[STRUCT](https://cloud.google.com/spanner/docs/data-types#struct_type)
</td>
<td>

The `STRUCT` type is used in `SELECT` statements and cannot be used as a column type. It is therefore not supported.
</td>
</tr>
</table>

## Create database 

Spanner [create database](https://cloud.google.com/spanner/docs/data-definition-language#create_database) statements (shown below) are encoded as the application name:

```sql
CREATE DATABASE database_id
```

<!-- TODO: complete -->

## Create table 

Spanner [create table](https://cloud.google.com/spanner/docs/data-definition-language#create_table) statements (shown below) are encoded as tables and table attributes:

```sql
CREATE TABLE table_name ( [
   { column_name data_type [ NOT NULL ] [ options_def ]
   | table_constraint }
   [, ... ]
] ) PRIMARY KEY ( [column_name [ { ASC | DESC } ], ...] )
[INTERLEAVE IN PARENT table_name [ ON DELETE { CASCADE | NO ACTION } ] ]
where data_type is:
    { scalar_type | array_type }

and options_def is:
    { OPTIONS ( allow_commit_timestamp = { true | null } ) }

and table_constraint is:
    [ CONSTRAINT constraint_name ]
    { FOREIGN KEY ( column_name [, ... ] ) REFERENCES  ref_table  ( ref_column [, ... ] ) }
```

<!-- TODO: complete -->

## Create index 

Spanner [create index](https://cloud.google.com/spanner/docs/data-definition-language#create_index) statements (shown below) are encoded as table attributes:

```sql
CREATE [ UNIQUE ] [ NULL_FILTERED ] INDEX index_name
ON table_name ( key_part [, ...] ) [ storing_clause ] [ , interleave_clause ]
where index_name is:
    {a—z|A—Z}[{a—z|A—Z|0—9|_}+]

and key_part is:
    column_name [ { ASC | DESC } ]

and storing_clause is:
    STORING ( column_name [, ...] )

and interleave_clause is:
    INTERLEAVE IN table_name
```

<!-- TODO: complete -->
