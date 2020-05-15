# NodeCategoriesProduct

The Task is Building a RESTful APIs from scratch using Express - Node.js.  
The Entities are a “Categories” and “Products”.  Category can have multiple child categories.  
Child category can have further child categories.  
Category can have multiple products and product can have a multiple  categories.  

The Entities must get saved in MongoDb and be retrieved via POST and GET  Methods respectively.  
Also, the candidate must be aware of HTTP Verbs and their significance in  RESTful APIs.    

You need to design a proper Mongodb data model and create APIs to   
1. Add a category  
2. Add Product mapped to a category or categories.  
3. Get all categories with all its child categories mapped to it. Note : Each  category object should look something like this {Id : 1 , child_categories:  [], ...}  
4. Get all products by a category.  
5. Update product details (name,price,etc)    

# Stack: Express Node.js, Mongodb

# install node packges

npm install

# start project

npm start

# API refererces you can import postman file.

RestfulUrls.postman_collection.json

# Schema design reference url

http://learnmongodbthehardway.com/schema/categoryhierarchy/
