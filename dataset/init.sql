DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS bibliographyEntries;

CREATE TABLE users (
    user_id SERIAL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE bibliographyentries (
    id SERIAL,
    user_id INT,
    authorfirstname VARCHAR(255),
    authorfamilyname VARCHAR(255),
    title VARCHAR(255),
    placeofedition VARCHAR(255),
    editor VARCHAR(255),
    yearofedition VARCHAR(255),
    collection VARCHAR(255),
    directorfirstname VARCHAR(255),
    directorfamilyname VARCHAR(255),
    edition VARCHAR(255),
    pagenumber VARCHAR(255),
    consultedon VARCHAR(255),
    url VARCHAR(255),
    magazinetitle VARCHAR(255),
    magazinevolume VARCHAR(255),
    magazinenumber VARCHAR(255),
    chapternumber VARCHAR(255),
    chaptertitle VARCHAR(255),
    pagination VARCHAR(255),
    type VARCHAR(255),
    htmlentry TEXT,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

