export type CourseType = 'LEGACY' | 'V1' | 'V2' | 'V3'

export type CourseLanguage = 'Python' | 'Java' | 'JavaScript' | 'C++' | 'Go'

export type CourseDetailType = 'plain' | 'HTML'

export interface Course {
  courseTitle: string
  courseType: CourseType
  courseLanguage: CourseLanguage
  lessonsInCourse: number
  published: Date
  courseDetailType: CourseDetailType
  CourseDetail: string
}
