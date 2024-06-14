create table employees_null(employee_id int,
					employee_name varchar(23),
					manager_id int)

insert into employees_null(employee_id, employee_name) values(1, 'John Doe')

insert into employees_null values(2, 'Jane Smith', 1),
						(3, 'Alice Brown', 1),
						(4, 'Bob Johnson', 2)

insert into employees_null(employee_id, employee_name) values(5, 'Charlie Black')

select * from employees_null where manager_id is null