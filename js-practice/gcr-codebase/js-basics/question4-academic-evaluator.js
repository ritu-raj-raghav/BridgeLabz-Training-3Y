/**
 * ============================================================================
 * JavaScript Assignment 1 - Question 4: Academic Performance Evaluator
 * ============================================================================
 * Problem Statement:
 * Evaluate a student's academic performance based on marks obtained across
 * 5 subjects and determine promotion status using logical operators.
 *
 * Requirements:
 * 1. Input marks of 5 subjects using an array.
 * 2. Calculate total, average, and overall percentage (assuming max 100 per subject).
 * 3. Use logical operators to determine:
 *    - "Promoted with Distinction" if percentage >= 85%
 *    - "Promoted" if percentage is between 50% - 84%
 *    - "Detained" if percentage < 50%
 * 4. Add validation: If ANY subject < 35 -> automatically "Detained" (failing grade).
 * ============================================================================
 */

function evaluateAcademicPerformance(studentName, subjectMarks) {
  const SUBJECT_COUNT = 5;
  const PASSING_THRESHOLD_PER_SUBJECT = 35;
  const MAX_MARKS_PER_SUBJECT = 100;
  const TOTAL_MAX_MARKS = SUBJECT_COUNT * MAX_MARKS_PER_SUBJECT;

  // Validate that exactly 5 subject marks are provided
  if (!Array.isArray(subjectMarks) || subjectMarks.length !== SUBJECT_COUNT) {
    throw new Error(`Expected exactly ${SUBJECT_COUNT} subject marks.`);
  }

  // 1. Calculate Total Marks using a loop and addition assignment
  let totalMarks = 0;
  let hasFailedSubject = false;
  let failedSubjectsCount = 0;

  for (let i = 0; i < subjectMarks.length; i++) {
    const mark = subjectMarks[i];
    totalMarks += mark;

    // Validation: Check if any individual subject score is below 35
    if (mark < PASSING_THRESHOLD_PER_SUBJECT) {
      hasFailedSubject = true;
      failedSubjectsCount++;
    }
  }

  // 2. Calculate Average and Percentage
  const averageMarks = totalMarks / SUBJECT_COUNT;
  const overallPercentage = (totalMarks / TOTAL_MAX_MARKS) * 100;

  // 3. Determine Promotion Status using Logical Operators
  let performanceStatus = "";
  let statusReason = "";

  // Critical Validation Check: If any subject < 35 -> automatically Detained
  if (hasFailedSubject) {
    performanceStatus = "Detained";
    statusReason = `Failed in ${failedSubjectsCount} subject(s) with marks < 35`;
  }
  // Promotion with Distinction: Overall percentage >= 85%
  else if (overallPercentage >= 85) {
    performanceStatus = "Promoted with Distinction";
    statusReason = "Met distinction benchmark (>= 85%) with all subjects cleared";
  }
  // Regular Promotion: Overall percentage between 50% and 84.99%
  else if (overallPercentage >= 50 && overallPercentage < 85) {
    performanceStatus = "Promoted";
    statusReason = "Cleared all subjects with passing percentage between 50% - 84%";
  }
  // Detained due to low overall aggregate (< 50%)
  else {
    performanceStatus = "Detained";
    statusReason = "Overall aggregate percentage fell below 50%";
  }

  return {
    studentName,
    subjectMarks,
    totalMarks,
    averageMarks: Number(averageMarks.toFixed(2)),
    overallPercentage: Number(overallPercentage.toFixed(2)),
    performanceStatus,
    statusReason,
  };
}

// ---------------------------------------------------------------------------
// Execution & Test Cases Demonstrating All Logic Branches
// ---------------------------------------------------------------------------
console.log("=== Question 4: Academic Performance Evaluator ===");

const testStudents = [
  { name: "Aarav Sharma", marks: [92, 88, 95, 89, 94] },   // Distinction (>= 85%)
  { name: "Riya Patel", marks: [65, 72, 58, 68, 70] },     // Promoted (50% - 84%)
  { name: "Karan Verma", marks: [42, 45, 48, 40, 44] },    // Detained (< 50%)
  { name: "Sneha Roy", marks: [90, 85, 92, 88, 28] },      // Detained (Subject 5 is 28 < 35)
];

const evaluationResults = testStudents.map((student) => {
  const result = evaluateAcademicPerformance(student.name, student.marks);
  console.log(`\nStudent: ${result.studentName}`);
  console.log(` - Subject Marks: [${result.subjectMarks.join(", ")}]`);
  console.log(` - Total: ${result.totalMarks} / 500`);
  console.log(` - Average: ${result.averageMarks}`);
  console.log(` - Percentage: ${result.overallPercentage}%`);
  console.log(` - Result: ${result.performanceStatus} (${result.statusReason})`);
  return {
    Name: result.studentName,
    Marks: `[${result.subjectMarks.join(", ")}]`,
    Average: result.averageMarks,
    Percentage: `${result.overallPercentage}%`,
    Outcome: result.performanceStatus,
  };
});

console.log("\nSummary Table:");
console.table(evaluationResults);

