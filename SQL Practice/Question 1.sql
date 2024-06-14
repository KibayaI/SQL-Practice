select employee_name from employees 
					where department_id =(select department_id from employees
					where salary = (select max(salary) from employees))