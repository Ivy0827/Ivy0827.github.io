/****** SSMS 中 SelectTopNRows 命令的指令碼  ******/
SELECT TOP (1000) [Name]
      ,[StudentId]
      ,[Role]
  FROM [dbo].[TeamMember]


-- Insert rows 
--INSERT INTO [dbo].[TeamMember]
--   ([Name],[StudentId],[Role])
--VALUES
--   ( 'Ken',null , 'Leader'),
--   ( 'Prinecess',null , 'Business Analyst'),
--   ( 'Janine',null , 'Data Analyst'),
--   ( 'Vy',null , 'Data Analyst'),
--   ( 'Ivy', 200411194, 'Developer')
--GO