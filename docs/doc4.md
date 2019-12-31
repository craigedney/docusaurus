---
id: doc4
title: How run a SQL UPDATE statement
sidebar_label: SQL UPDATE
---
The **UPDATE** statement is used to modify the existing records in a table.

## 1. Syntax

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

**Note: Be careful when updating records in a table! Notice the WHERE clause in the UPDATE statement. The WHERE clause specifies which record(s) that should be updated. If you omit the WHERE clause, all records in the table will be updated!**

## 2. Example Table
Below is a selection from the `GPsPCTs` table. 

PCTID | PCTName | ApplicationID | Email
------------ | ------------- | ------------- | -------------
1 | firstCCG | XX-10 | firstCCG@email.com
2 | secondCCG | XX-15 | secondCCG@email.com
3 | thirdCCG | XX-20 | thirdCCG@email.com

## 3. Example Statement
The following SQL statement will update a new email for **firstCCG** using it's unique **PCTID** identifier.

```sql
UPDATE GPsPCTs
SET Email = "newCCG@email.com"
WHERE PCTID = 1;
```

## 4. Example Result
The `GPsPCTs` table will now look like this:

PCTID | PCTName | ApplicationID | Email
------------ | ------------- | ------------- | -------------
1 | firstCCG | XX-10 | newCCG@email.com
2 | secondCCG | XX-15 | secondCCG@email.com
3 | thirdCCG | XX-20 | thirdCCG@email.com