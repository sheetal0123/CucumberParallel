#Cucumber Project
Cucumber feature's file will run in parallel

How to run
mvn clean test

result:
target/cucumber-parallel




#info:

pom:
1. forkCount: 2		|  this value decided how many threads to run
2. <include>**/Parallel*IT.class	|  this is regex, Pick Parallel01IT.java and create different copies of Runner file
e.g.
Running Parallel01IT
Running Parallel02IT

As per thread count, runner file will get created
Each runner will picked a feature file and run it

