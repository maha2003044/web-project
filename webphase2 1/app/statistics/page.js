'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell
} from 'recharts'
import './styles.css'

export default function StatisticsDashboard() {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [stats, setStats] = useState({
    studentsByYear: [],
    studentsByCategory: [],
    studentsByCourse: [],
    topCourses: [],
    failureRateByCourse: [],
    failureRateByCategory: [],
    averageGradeByCourse: [],
    enrollmentTrend: [],
    topInstructors: [],
    completionRateByYear: [],
    departmentPerformance: [],
    classUtilization: []
  })
  const [error, setError] = useState(null)

  // Chart colors
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57'];

  useEffect(() => {
    async function fetchAllStats() {
      setLoading(true)
      setError(null)
      
      try {
     
        const fetchData = async (endpoint) => {
          const response = await fetch(`/api/stats/${endpoint}`)
          if (!response.ok) {
            throw new Error(`Error fetching data from ${endpoint}`)
          }
          return response.json()
        }

        const [
          studentsByYear,
          studentsByCategory,
          studentsByCourse,
          topCourses,
          failureRateByCourse,
          failureRateByCategory,
          averageGradeByCourse,
          enrollmentTrend,
          topInstructors,
          completionRateByYear,
          departmentPerformance,
          classUtilization
        ] = await Promise.all([
          fetchData('students-by-year'),
          fetchData('students-by-category'),
          fetchData('students-by-course'),
          fetchData('top-courses'),
          fetchData('failure-by-course'),
          fetchData('failure-by-category'),
          fetchData('average-grade'),
          fetchData('enrollment-trend'),
          fetchData('top-instructors'),
          fetchData('completion-by-year'),
          fetchData('department-performance'),
          fetchData('class-utilization')
        ])

        setStats({
          studentsByYear,
          studentsByCategory,
          studentsByCourse: studentsByCourse.slice(0, 10), 
          topCourses,
          failureRateByCourse: failureRateByCourse.slice(0, 10), 
          failureRateByCategory,
          averageGradeByCourse: averageGradeByCourse.slice(0, 10), 
          enrollmentTrend,
          topInstructors,
          completionRateByYear,
          departmentPerformance,
          classUtilization: classUtilization.slice(0, 10) 
        })
      } catch (error) {
        console.error("Error fetching statistics:", error)
        setError("Failed to load statistics data. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchAllStats()
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading statistics data...</p>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="error-container">
        <h3>Error</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    )
  }

  // Format data for Recharts
  const studentsByYearForChart = stats.studentsByYear.map(item => ({
    name: `Year ${item.year}`,
    students: item._count?.studentId || 0
  }));

  const studentsByCategoryForChart = stats.studentsByCategory.map(item => ({
    name: item.category,
    value: item.studentCount
  }));

  const topCoursesForChart = stats.topCourses.map(item => ({
    name: item.courseName,
    students: item.studentCount
  }));

  const failureRateForChart = stats.failureRateByCourse.slice(0, 5).map(item => ({
    name: item.courseName,
    rate: item.failureRate
  }));

  const avgGradeForChart = stats.averageGradeByCourse.slice(0, 5).map(item => ({
    name: item.courseName,
    gpa: item.averageGPA
  }));

  const completionRateForChart = stats.completionRateByYear.map(item => ({
    name: `Year ${item.year}`,
    rate: item.completionRate
  }));

  const classUtilizationForChart = stats.classUtilization.slice(0, 5).map(item => ({
    name: item.courseName,
    percentage: item.utilizationPercentage
  }));

  return (
    <div className="stats-container">
      <div className="stats-header">
        <h1>Student Management Statistics Dashboard</h1>
        <div className="header-actions">
          <div className="tabs">
            <button 
              className={activeTab === 'overview' ? 'active' : ''} 
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={activeTab === 'students' ? 'active' : ''} 
              onClick={() => setActiveTab('students')}
            >
              Students
            </button>
            <button 
              className={activeTab === 'courses' ? 'active' : ''} 
              onClick={() => setActiveTab('courses')}
            >
              Courses
            </button>
            <button 
              className={activeTab === 'performance' ? 'active' : ''} 
              onClick={() => setActiveTab('performance')}
            >
              Performance
            </button>
          </div>
          <Link href="/" className="back-link">Back to Home</Link>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="stats-grid">
          {/* Students by Year - Bar Chart */}
          <div className="stat-card chart-card">
            <h2>Student Distribution by Year</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={studentsByYearForChart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" fill="#0088FE" name="Number of Students" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Students by Category - Pie Chart */}
          <div className="stat-card chart-card">
            <h2>Students by Course Category</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={studentsByCategoryForChart}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {studentsByCategoryForChart.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} students`, 'Enrollment']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

  
          <div className="stat-card chart-card">
            <h2>Top 3 Most Popular Courses</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={topCoursesForChart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" fill="#00C49F" name="Number of Students" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>


          <div className="stat-card chart-card">
            <h2>Top 5 Courses by Failure Rate</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={failureRateForChart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value.toFixed(2)}%`, 'Failure Rate']} />
                  <Legend />
                  <Bar dataKey="rate" fill="#FF8042" name="Failure Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'students' && (
        <div className="stats-grid">
        
          <div className="stat-card">
            <h2>Student Distribution by Year</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Number of Students</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.studentsByYear.map((item, index) => (
                    <tr key={index}>
                      <td>Year {item.year}</td>
                      <td>{item._count?.studentId || 0}</td>
                    </tr>
                  ))}
                  {stats.studentsByYear.length === 0 && (
                    <tr>
                      <td colSpan="2" className="no-data">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

         
          <div className="stat-card">
            <h2>Students by Course Category</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Number of Students</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.studentsByCategory.map((item, index) => (
                    <tr key={index}>
                      <td>{item.category}</td>
                      <td>{item.studentCount}</td>
                    </tr>
                  ))}
                  {stats.studentsByCategory.length === 0 && (
                    <tr>
                      <td colSpan="2" className="no-data">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

     
          <div className="stat-card chart-card">
            <h2>Course Completion Rate by Year</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={completionRateForChart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Completion Rate']} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }} 
                    name="Completion Rate (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          
          <div className="stat-card">
            <h2>Course Completion Rate by Year</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Completed</th>
                    <th>Total</th>
                    <th>Completion Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.completionRateByYear.map((item, index) => (
                    <tr key={index}>
                      <td>Year {item.year}</td>
                      <td>{item.completedCount}</td>
                      <td>{item.totalCount}</td>
                      <td>{item.completionRate}%</td>
                    </tr>
                  ))}
                  {stats.completionRateByYear.length === 0 && (
                    <tr>
                      <td colSpan="4" className="no-data">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'courses' && (
        <div className="stats-grid">
         
          <div className="stat-card">
            <h2>Top 10 Courses by Enrollment</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Number of Students</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.studentsByCourse.map((item, index) => (
                    <tr key={index}>
                      <td>{item.courseName}</td>
                      <td>{item.studentCount}</td>
                    </tr>
                  ))}
                  {stats.studentsByCourse.length === 0 && (
                    <tr>
                      <td colSpan="2" className="no-data">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="stat-card chart-card">
            <h2>Average GPA by Course (Top 5)</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={avgGradeForChart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 4]} />
                  <Tooltip formatter={(value) => [`${value.toFixed(2)}`, 'GPA']} />
                  <Legend />
                  <Bar dataKey="gpa" fill="#82ca9d" name="Average GPA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="stat-card chart-card">
            <h2>Class Utilization (Top 5)</h2>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={classUtilizationForChart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Utilization']} />
                  <Legend />
                  <Bar dataKey="percentage" fill="#8884d8" name="Utilization (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

    
          <div className="stat-card">
            <h2>Class Utilization</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Instructor</th>
                    <th>Enrolled/Limit</th>
                    <th>Utilization</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.classUtilization.map((item, index) => (
                    <tr key={index}>
                      <td>{item.courseName}</td>
                      <td>{item.instructor}</td>
                      <td>{item.enrolled} / {item.classLimit}</td>
                      <td className={item.utilizationPercentage > 80 ? 'high-utilization' : ''}>
                        {item.utilizationPercentage}%
                      </td>
                    </tr>
                  ))}
                  {stats.classUtilization.length === 0 && (
                    <tr>
                      <td colSpan="4" className="no-data">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'performance' && (
        <div className="stats-grid">
          
          <div className="stat-card">
            <h2>Failure Rate by Course</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Failed</th>
                    <th>Total</th>
                    <th>Failure Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.failureRateByCourse.map((item, index) => (
                    <tr key={index}>
                      <td>{item.courseName}</td>
                      <td>{item.failedCount}</td>
                      <td>{item.totalCount}</td>
                      <td className={item.failureRate > 40 ? 'high-failure' : ''}>
                        {item.failureRate}%
                      </td>
                    </tr>
                  ))}
                  {stats.failureRateByCourse.length === 0 && (
                    <tr>
                      <td colSpan="4" className="no-data">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="stat-card">
            <h2>Failure Rate by Course Category</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Failed</th>
                    <th>Total</th>
                    <th>Failure Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.failureRateByCategory.map((item, index) => (
                    <tr key={index}>
                      <td>{item.category}</td>
                      <td>{item.failedCount}</td>
                      <td>{item.totalCount}</td>
                      <td className={item.failureRate > 40 ? 'high-failure' : ''}>
                        {item.failureRate}%
                      </td>
                    </tr>
                  ))}
                  {stats.failureRateByCategory.length === 0 && (
                    <tr>
                      <td colSpan="4" className="no-data">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="stat-card">
            <h2>Average GPA by Course</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Average GPA</th>
                    <th>Student Count</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.averageGradeByCourse.map((item, index) => (
                    <tr key={index}>
                      <td>{item.courseName}</td>
                      <td className={item.averageGPA >= 3.5 ? 'high-gpa' : item.averageGPA < 2.5 ? 'low-gpa' : ''}>
                        {item.averageGPA.toFixed(2)}
                      </td>
                      <td>{item.studentCount}</td>
                    </tr>
                  ))}
                  {stats.averageGradeByCourse.length === 0 && (
                    <tr>
                      <td colSpan="3" className="no-data">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="stat-card">
            <h2>Department Performance</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Avg GPA</th>
                    <th>Classes</th>
                    <th>Students</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.departmentPerformance.map((item, index) => (
                    <tr key={index}>
                      <td>{item.department}</td>
                      <td className={item.avgGPA >= 3.5 ? 'high-gpa' : item.avgGPA < 2.5 && item.avgGPA !== null ? 'low-gpa' : ''}>
                        {item.avgGPA ? item.avgGPA.toFixed(2) : 'N/A'}
                      </td>
                      <td>{item.classCount}</td>
                      <td>{item.studentCount}</td>
                    </tr>
                  ))}
                  {stats.departmentPerformance.length === 0 && (
                    <tr>
                      <td colSpan="4" className="no-data">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}