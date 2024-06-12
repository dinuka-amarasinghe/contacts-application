CREATE TABLE IF NOT EXISTS contacts (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    title VARCHAR(255),
    phone VARCHAR(255),
    address VARCHAR(255),
    status VARCHAR(255),
    photo_url VARCHAR(255)
);
