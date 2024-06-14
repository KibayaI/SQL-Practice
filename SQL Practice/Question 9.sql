create table orders(order_id int,
			customer_id int,
			order_date date)

insert into orders values(2043, 1, '2023-06-01'),
					(2044, 2, '2023-06-02'),
					(2045, 3, '2023-06-03'),
					(2046, 1, '2023-06-04')

BEGIN TRANSACTION
update orders set order_date = '2023-07-23' where order_id = 2045
COMMIT TRANSACTION