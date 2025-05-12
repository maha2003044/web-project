'use server';

import studentManagement from '../repo/studentManagement'
import { prisma } from '@/lib/repo';
import { redirect } from 'next/navigation';

// =============== BASIC OPERATIONS =============== //

// Student-related Server Actions
export async function getAllStudents() {
  return await studentManagement.getAllStudents()
}

export async function getStudentById(id) {
  return await studentManagement.getStudent(id)
}

export async function createNewStudent(studentData) {
  return await studentManagement.createStudent(studentData)
}

export async function updateStudentInfo(id, updatedData) {
  return await studentManagement.updateStudent(id, updatedData)
}

export async function removeStudent(id) {
  return await studentManagement.deleteStudent(id)
}

export async function getStudentsByYear(year) {
  return await studentManagement.getStudentsByYear(year)
}

// Course-related Server Actions
export async function getAllCourses() {
  return await studentManagement.getAllCourses()
}

export async function getCourseById(id) {
  return await studentManagement.getCourse(id)
}

export async function createNewCourse(courseData) {
  return await studentManagement.createCourse(courseData)
}

export async function updateCourseInfo(id, updatedData) {
  return await studentManagement.updateCourse(id, updatedData)
}

export async function removeCourse(id) {
  return await studentManagement.deleteCourse(id)
}

export async function getCoursesByCategory(category) {
  return await studentManagement.getCourseByCat(category)
}

// Instructor-related Server Actions
export async function getAllInstructors() {
  return await studentManagement.getAllInstructors()
}

export async function getInstructorById(id) {
  return await studentManagement.getInstructor(id)
}

export async function createNewInstructor(instructorData) {
  return await studentManagement.createInstructor(instructorData)
}

export async function updateInstructorInfo(id, updatedData) {
  return await studentManagement.updateInstructor(id, updatedData)
}

export async function removeInstructor(id) {
  return await studentManagement.deleteInstructor(id)
}

// Class-related Server Actions
export async function getAllClasses() {
  return await studentManagement.getAllClasses()
}

export async function getClassById(id) {
  return await studentManagement.getClass(id)
}

export async function createNewClass(classData) {
  return await studentManagement.createClass(classData)
}

export async function updateClassInfo(id, updatedData) {
  return await studentManagement.updateClass(id, updatedData)
}

export async function removeClass(id) {
  return await studentManagement.deleteClass(id)
}

export async function getOpenClasses() {
  return await studentManagement.getOpenClasses()
}

// Getting students by course
export async function getStudentsByCourse(courseName) {
  return await studentManagement.getStudentsByCourse(courseName)
}

// =============== STATISTICS OPERATIONS =============== //

export async function getStudentsCountByYear() {
  try {
    return await studentManagement.getStudentsCountByYear()
  } catch (error) {
    console.error("Error in getStudentsCountByYear:", error)
    return []
  }
}

export async function getStudentsCountByCategory() {
  try {
    return await studentManagement.getStudentsCountByCategory()
  } catch (error) {
    console.error("Error in getStudentsCountByCategory:", error)
    return []
  }
}

export async function getStudentsCountByCourse() {
  try {
    return await studentManagement.getStudentsCountByCourse()
  } catch (error) {
    console.error("Error in getStudentsCountByCourse:", error)
    return []
  }
}

export async function getTopThreeCourses() {
  try {
    return await studentManagement.getTopThreeCourses()
  } catch (error) {
    console.error("Error in getTopThreeCourses:", error)
    return []
  }
}

export async function getFailureRateByCourse() {
  try {
    return await studentManagement.getFailureRateByCourse()
  } catch (error) {
    console.error("Error in getFailureRateByCourse:", error)
    return []
  }
}

export async function getFailureRateByCategory() {
  try {
    return await studentManagement.getFailureRateByCategory()
  } catch (error) {
    console.error("Error in getFailureRateByCategory:", error)
    return []
  }
}

export async function getAverageGradeByCourse() {
  try {
    return await studentManagement.getAverageGradeByCourse()
  } catch (error) {
    console.error("Error in getAverageGradeByCourse:", error)
    return []
  }
}

export async function getEnrollmentTrendByCategory() {
  try {
    return await studentManagement.getEnrollmentTrendByCategory()
  } catch (error) {
    console.error("Error in getEnrollmentTrendByCategory:", error)
    return []
  }
}

export async function getTopInstructorsByClassCount() {
  try {
    return await studentManagement.getTopInstructorsByClassCount()
  } catch (error) {
    console.error("Error in getTopInstructorsByClassCount:", error)
    return []
  }
}

export async function getCourseCompletionRateByYear() {
  try {
    return await studentManagement.getCourseCompletionRateByYear()
  } catch (error) {
    console.error("Error in getCourseCompletionRateByYear:", error)
    return []
  }
}

export async function getDepartmentPerformance() {
  try {
    return await studentManagement.getDepartmentPerformance()
  } catch (error) {
    console.error("Error in getDepartmentPerformance:", error)
    return []
  }
}

export async function getClassUtilization() {
  try {
    return await studentManagement.getClassUtilization()
  } catch (error) {
    console.error("Error in getClassUtilization:", error)
    return []
  }
}


export const authenticateUser = async (formData) => {
  try {
    const username = formData.get('username');
    const password = formData.get('password');
    const role = formData.get('role');

    if (!username || !password || !role) {
      return { error: 'All fields are required.' };
    }

    const existingUser = await prisma.user.findUnique({
      where: { username: username },
      select: {
        id: true,
        username: true,
        password: true,
        role: true,
        collegeId: true,
        departmentId: true,
      },
    });

    if (!existingUser || existingUser.password !== password) {
      return { error: 'Invalid credentials.' };
    }

    if (existingUser.role !== role) {
      return { error: 'Role mismatch.' };
    }

    const { password: _, ...safeUser } = existingUser;
    return { user: safeUser };
  } catch (err) {
    console.error('Login failed:', err);
    return { error: 'Authentication failed. Please try again.' };
  }
};

export const getCourses = async () => {
  return prisma.course.findMany({
    select: {
      cname: true,
      category: true,
      prerequisites: true,
    },
  });
};

export const logoutUser = async () => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
    redirect('/login');
  } catch (err) {
    console.error('Logout failed:', err);
    return { error: 'Unable to logout.' };
  }
};
