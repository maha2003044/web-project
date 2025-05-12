-- CreateTable
CREATE TABLE "Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "instructor" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "limit" INTEGER NOT NULL,
    "enrolled" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "schedule" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Course" (
    "couId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cname" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "prerequisites" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Instructor" (
    "insId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "department" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Student" (
    "studentId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "year" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "StudentCourse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "enrollmentDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "grade" TEXT,
    CONSTRAINT "StudentCourse_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("studentId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StudentCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("couId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StudentCourse_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentCourse_studentId_courseId_classId_key" ON "StudentCourse"("studentId", "courseId", "classId");
