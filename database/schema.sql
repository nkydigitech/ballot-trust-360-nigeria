-- Supabase Postgres - All Nigerian Fixed - No duplicates
CREATE TABLE offices (id TEXT PRIMARY KEY, name TEXT);
INSERT INTO offices VALUES ('president','President'),('governor','Governor'),('senate','Senator'),('house_rep','House of Reps'),('state_assembly','State Assembly');
CREATE TABLE candidates (id SERIAL PRIMARY KEY, office_id TEXT, name TEXT, party TEXT, gender TEXT, photo_url TEXT);
INSERT INTO candidates (office_id,name,party,gender,photo_url) VALUES
('president','Emeka Okafor','FUA','male','/candidates/president_1_Emeka_Okafor_male.webp'),
('president','Aisha Bello','CPC','female','/candidates/president_2_Aisha_Bello_female.webp'),
('president','Tolu Adebayo','HGM','female','/candidates/president_3_Tolu_Adebayo_female.webp'),
('president','Ngozi Eze','IEP','female','/candidates/president_4_Ngozi_Eze_female_CORRECT.webp'),
('president','Ibrahim Musa','RPF','male','/candidates/president_5_Ibrahim_Musa_male_CORRECT.webp');
