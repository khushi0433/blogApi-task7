# Blog API

A RESTful API built with Node.js and Express for managing blog posts and users. This API provides endpoints for creating, reading, updating, and deleting blog posts and user accounts. --TASK NUMBER 7

## Features

- **User Management**: Create, read, update, and delete user accounts
- **Blog Posts**: Full CRUD operations for blog posts
- **Authentication**: Secure user authentication system
- **RESTful Design**: Clean REST API architecture
- **Database**: MySQL with Sequelize ORM
- **Error Handling**: Comprehensive error handling and validation
- **CORS Support**: Cross-origin resource sharing enabled

## API Endpoints

### User Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| POST | `/users` | Create new user |
| PUT | `/users/:id` | Update user |
| DELETE | `/users/:id` | Delete user |

### Post Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Get all posts |
| GET | `/posts/:id` | Get post by ID |
| POST | `/posts` | Create new post |
| PUT | `/posts/:id` | Update post |
| DELETE | `/posts/:id` | Delete post |

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Authentication**: JWT (JSON Web Tokens)
- **CORS**: cors middleware
- **Environment**: dotenv

## Project Structure

```
blogApi/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── config/
│   └── db.js             # Database configuration
├── controllers/
│   ├── userController.js  # User CRUD operations
│   └── postController.js  # Post CRUD operations
├── models/
│   ├── user.js           # User model
│   └── post.js           # Post model
├── routes/
│   ├── userRoutes.js     # User API routes
│   └── postRoutes.js     # Post API routes
├── middleware/
│   └── authMiddleware.js # Authentication middleware
└── README.md            # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blogApi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   - Create a MySQL database
   - Update your database configuration in `config/db.js`

4. **Start the server**
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000`

## 🔧 Configuration

Create a `.env` file in the root directory with the following variables:

```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
DB_PORT=3306
PORT=3000
```
## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Posts Table
```sql
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  userId INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);
```

## API Usage Examples

### Create a New User
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "securepassword123"
  }'
```

### Get All Users
```bash
curl http://localhost:3000/users
```

### Create a New Post
```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is the content of my first blog post.",
    "userId": 1
  }'
```

### Get All Posts
```bash
curl http://localhost:3000/posts
```

## Error Handling

The API includes comprehensive error handling:
- **400 Bad Request**: Invalid input data
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server-side errors

## Testing

You can test the API using:
- **Postman**: Import the endpoints and test with different payloads
- **curl**: Use the examples provided above
- **Browser**: Visit the endpoints directly for GET requests

## Development Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server with nodemon for development
- `npm test` - Run tests (if configured)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the error logs in your console
2. Ensure your database is properly configured
3. Verify all environment variables are set correctly
4. Open an issue in the repository

## Contact

For questions or support, please open an issue in this repository.
