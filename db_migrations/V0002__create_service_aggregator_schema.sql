CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE masters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  profession VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  bio TEXT,
  rating DECIMAL(2,1) DEFAULT 0.0,
  total_reviews INTEGER DEFAULT 0,
  price_from INTEGER,
  verified BOOLEAN DEFAULT FALSE,
  location_lat DECIMAL(10, 7),
  location_lng DECIMAL(10, 7),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  master_id INTEGER REFERENCES masters(id),
  client_name VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  master_id INTEGER REFERENCES masters(id),
  client_name VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  service_date TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_masters_category ON masters(category);
CREATE INDEX idx_masters_rating ON masters(rating);
CREATE INDEX idx_masters_location ON masters(location_lat, location_lng);
CREATE INDEX idx_reviews_master ON reviews(master_id);
CREATE INDEX idx_bookings_master ON bookings(master_id);

INSERT INTO masters (name, email, phone, profession, category, rating, total_reviews, price_from, verified, address) VALUES
('Анна Петрова', 'anna@example.com', '+7 999 123 4567', 'Мастер маникюра', 'beauty', 4.9, 127, 1500, true, 'Москва, ул. Ленина, 10'),
('Дмитрий Иванов', 'dmitry@example.com', '+7 999 234 5678', 'Клининг-специалист', 'cleaning', 5.0, 89, 2000, true, 'Москва, пр. Мира, 25'),
('Елена Смирнова', 'elena@example.com', '+7 999 345 6789', 'Специалист по клинингу', 'cleaning', 4.8, 156, 1800, true, 'Москва, ул. Пушкина, 5'),
('Сергей Волков', 'sergey@example.com', '+7 999 456 7890', 'Мастер по ремонту', 'repair', 4.7, 203, 3000, false, 'Москва, ул. Гагарина, 15'),
('Мария Козлова', 'maria@example.com', '+7 999 567 8901', 'Мастер маникюра', 'beauty', 4.9, 94, 1600, true, 'Москва, пр. Победы, 8'),
('Алексей Новиков', 'alex@example.com', '+7 999 678 9012', 'Электрик', 'electric', 4.6, 78, 2500, true, 'Москва, ул. Советская, 20');