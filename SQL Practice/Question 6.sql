create database sales;

create table customers(customer_id  int,customer_name varchar(17));

insert into customers values(1,'alice'),(2,'Bob'),(3,'charlie');

create table sales (sales_id int , customer_id int,sale_amount int );

insert into sales values(1,1,500),(2,1,300),(3,2,400),(4,2,200);

SELECT c.customer_id, c.customer_name, COALESCE(SUM(s.sale_amount), 0) AS total_sales
FROM customers c LEFT JOIN sales s
ON c.customer_id = s.customer_id
GROUP BY c.customer_id, c.customer_name;