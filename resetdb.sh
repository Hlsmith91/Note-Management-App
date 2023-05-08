rm prisma/dev.db
npx prisma generate
npm prisma migrate dev --name init --skip-seed
npx prisma db seed