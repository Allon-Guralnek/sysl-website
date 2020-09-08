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

```sql title="Input Spanner SQL file: example.sql"
CREATE DATABASE Music;
CREATE TABLE Singers (
  SingerId   INT64 NOT NULL,
  FirstName  STRING(1024),
  LastName   STRING(1024),
) PRIMARY KEY (SingerId);
```
</td>
<td>

```sysl title="Output Sysl file: output.sysl"
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

A Spanner schema can be imported into a Sysl file using an import statement.
The flags -a and -p govern the name of the Sysl app and package in the generated sysl file.

```bash
sysl import -i singers.sql -a Jazz -p Music -o singers.sysl
```

```sql title="Input Spanner SQL file: singers.sql"
CREATE TABLE Singers (
  SingerId   INT64 NOT NULL,
  FirstName  STRING(1024),
  LastName   STRING(1024),
) PRIMARY KEY (SingerId);
```

The sysl file generated after invoking the `sysl import` command:

```sysl title="Output Sysl file: singers.sysl"
Jazz [package="Music"]:
  !table Singers:
    SingerId <: int64 [~pk]
    FirstName <: string(1024)?
    LastName <: string(1024)?
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
b <: bytes [length="1024"]
b <: bytes [length="1024", ~hex]
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

```sysl
database_id:
    ...
```

#### Example

The following create database statement:

```sql
CREATE DATABASE FooBar
```

Would be encoded as:

```sysl
FooBar:
    ...
```

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

<table>
<tr><td><b>Spanner</b></td><td><b>Sysl</b></td></tr>
<tr valign="top">
<td>
table_name
</td>
<td>
The table name is encoded as the table entity name:

```sysl
table MyTable:
    ...
```
</td>
</tr>
<tr valign="top">
<td>
column_name
</td>
<td>
The column name will be encoded as a field:

```sysl
!table T:
    my_column <: string?
```
</td>
</tr>
<tr valign="top">
<td>
data_type
</td>
<td>
See the Data types section above.
</td>
</tr>
<tr valign="top">
<td>
NOT NULL
</td>
<td>
Nullable and non-nullable types will be represented by the optional qualifier to the field's data type:

```sysl
non_null_string <: string
nullable_string <: string?
```
</td>
</tr>
<tr valign="top">
<td>
allow_commit_timestamp
</td>
<td>
The allow commit timestamp option will be encoded as an annotation on the field:

```sysl
d <: datetime [allow_commit_timestamp = "true"]
```
</td>
</tr>
<tr valign="top">
<td>
foreign key
</td>
<td>
Foreign keys will be encoded against table fields using an annotation and corresponding reference table:

FOREIGN KEY user_id REFERENCES user id
will be encoded as:

```sysl
user_id <: User.id [~fk]
```
In instances where only a single foreign key is used and the foreign key constraint is unnamed and the constraint columns appear in the order they are found within the table then the above information is sufficient to encode the constraint. However, if the foreign key constraint is named or there is more than one foreign key constraint then the table will be annotated with the constraint name and column information:

CONSTRAINT c1 FOREIGN KEY user_id REFERENCES user id
FOREIGN KEY state_id, state_ref REFERENCES state id, ref
will be encoded as:

```sysl
!table TableT [foreign_keys=[[
  "constraint:c1",
  "columns:user_id"
],[
  "columns:state_id,state_ref"
]]:
    user_id <: User.id [~fk]
    state_id <: State.id [~fk]
    state_ref <: State.ref [~fk]
```
</td>
</tr>
<tr valign="top">
<td>
primary key
</td>
<td>
Primary keys will be encoded against table fields using an annotation and corresponding reference table:

PRIMARY KEY id
will be encoded as:

```sysl
id <: string [~pk]
```
In instances where all primary key columns are ordered by their order within the table and no columns have a sort ordering then the above information is sufficient to encode the constraint:

PRIMARY KEY id, ref
will be encoded as:

```sysl
!table TableT:
    id <: string [~pk]
    ref <: int [~pk]
```
However, if the columns of the primary key constraint are ordered differently than their order within the table or any column has a sort ordering then the table will be annotated with the primary key information:

PRIMARY KEY ref, id
will be encoded as:

```sysl
!table TableT [primary_key="ref,id"]:
    id <: string [~pk]
    ref <: int [~pk]
```
And:

PRIMARY KEY id, ref DESC
will be encoded as:

```sysl
!table TableT [primary_key="id,ref(desc)"]:
    id <: string [~pk]
    ref <: int [~pk]
```
Where asc or desc in parenthesis will be used for column ordering.
</td>
</tr>
<tr valign="top">
<td>
interleave in parent
</td>
<td>
Interleaving in parent will be encoded against the table as two attributes:

INTERLEAVE IN PARENT TableT ON DELETE CASCADE
will be encoded as:

```sysl
!table TableT [interleave_in_parent="TableT", interleave_on_delete="cascade"]:
    ...
```
Where interleave_on_delete is either cascade or no_action.
</td>
</tr>
</table>

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

```sysl
!table TableT [indexes=[[
  "name:table_name",
  "unique:true",                      # true or false
  "null_filtered:true",               # true or false
  "key_parts:column1,column2(desc)",  # asc or desc in parenthesis for column sorting
  "storing:column1,column2",
  "interleave_in:table_name"
]]
```

#### Example

The following create index statement:

```sql
CREATE INDEX SingersByName ON Singers(Name, SingerInfo DESC)
```

Would be encoded as:

```sysl
!table Singers [indexes=[ ["name:SingersByName", "key_parts:Name,SingerInfo(desc)"] ]
```

## Name conflicts

In instances where a valid Spanner identifier is an invalid Sysl identifier, the name attribute will be used to resolve the issue:

```sql
CREATE TABLE MyTable (
  RowId INT64 NOT NULL,
  `Int64` INT64
);
```
Would be encoded as:

```sysl
!table MyTable:
    RowId <: int
    _int64 <: int [name="int64"]
```
