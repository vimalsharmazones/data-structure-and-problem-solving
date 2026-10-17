package Java.Interview;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

public class FindHighestSalaryInDept {
    public static void main(String[] args) {
        List<Employee> employees = List.of(
                new Employee(1, "John", "IT", 80000),
                new Employee(2, "Alice", "HR", 60000),
                new Employee(3, "Bob", "IT", 95000),
                new Employee(4, "David", "Finance", 75000),
                new Employee(5, "Emma", "HR", 70000),
                new Employee(6, "Mike", "Finance", 90000),
                new Employee(7, "Sarah", "IT", 85000),
                new Employee(8, "Robert", "HR", 65000),
                new Employee(9, "James", "Finance", 85000));

        Map<String, Employee> result = employees.stream()
                .collect(Collectors.groupingBy(
                        Employee::getDepartment,
                        Collectors.collectingAndThen(
                                Collectors.maxBy(
                                        Comparator.comparingDouble(
                                                Employee::getSalary)),
                                Optional::get)));

        result.forEach((key, value) -> {
            System.out.println(key + ": " + value.getSalary());
        });

    }

}

class Employee {

    private int id;
    private String name;
    private String department;
    private double salary;

    public Employee(int id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    public double getSalary() {
        return this.salary;
    }

    public String getDepartment() {
        return this.department;
    }
    // getters
}