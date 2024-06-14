create database shop ;

create table customer (customer_id  int,customer_name varchar(17));

insert into customer values(1,'alice'),(2,'Bob'),(3,'charlie');

create table categories (category_id int,category_name varchar(15));
insert into categories values(1,'electronics'),(2,'electronics'),(3,'groceries');
select * from categories;

create table purchases (puchase_id int , customer_id int , category_id int );
insert into purchases values(1,1,1),(2,1,2),(3,1,3),(4,2,1),(5,2,2);

select customer_name from customer c join purchases p
on c.customer_id =p.customer_id 
group by c.customer_id ,c.customer_name 
having COUNT(DISTINCT p.category_id) =(select COUNT(*) from categories)
