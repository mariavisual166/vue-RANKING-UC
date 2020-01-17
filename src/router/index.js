import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Home from '@/components/Home'
import Users from '@/components/admin/Users'
import Dashboard from '@/components/layout/Dashboard'
import AuditList from '@/components/audit/AuditList'

// Reports
//import Report from '@/components/reports/Reports'
import ReportsHome from '@/components/reports/ReportsHome'
import ConfigReportsStudents from '@/components/ConfigReportsStudents'
import ConfigReportsTeachers from '@/components/ConfigReportsTeachers'
import ConfigReportsGraduates from '@/components/ConfigReportsGraduates'


//QS Ranking
import CitationsPerFaculty from '@/components/reports/qs/CitationsPerFaculty'
import FacultyStudentRatioStudent from '@/components/reports/qs/FacultyStudentRatioStudent'
import FacultyStudentRatioTeacher from '@/components/reports/qs/FacultyStudentRatioTeacher'
import ProportionOfInternationalFaculty from '@/components/reports/qs/ProportionOfInternationalFaculty'
import ProportionOfInternationalStudents from '@/components/reports/qs/ProportionOfInternationalStudents'
import ProportionOfStudentsPerFaculty from '@/components/reports/qs/ProportionOfStudentsPerFaculty'
import PublicationsPerTeacher from '@/components/reports/qs/PublicationsPerTeacher'
import StaffWithAPhD from '@/components/reports/qs/StaffWithAPhD'
import Employability from '@/components/reports/qs/Employability'

//Students

import ConfigEstudiante from '@/components/ConfigEstudiante'
import CargaDeArchivoStudents from '@/components/students/CargaDeArchivoStudents'
import FechaTopeStudents from '@/components/students/FechaTopeStudents'
import FechaActualizacionStudents from '@/components/students/FechaActualizacionStudents'


import ForeignStudentsPerFaculty from '@/components/reports/students/ForeignStudentsPerFaculty'
import StudentsDisabilityPerFaculty from '@/components/reports/students/StudentsDisabilityPerFaculty'
import StudentsEthnicGroupsPerFaculty from '@/components/reports/students/StudentsEthnicGroupsPerFaculty'
import StudentsSexFaculty from '@/components/reports/students/StudentsSexFaculty'
import StudentsPerYear from '@/components/reports/students/StudentsPerYear'
import StudentsYearFaculty from '@/components/reports/students/StudentsYearFaculty'
import UndergraduateStudentsNationality from '@/components/reports/students/UndergraduateStudentsNationality'
import UndergraduateStudentsSex from '@/components/reports/students/UndergraduateStudentsSex'


//Teachers
import ConfigDocente from '@/components/ConfigDocente'
import CargaDeArchivoTeachers from '@/components/teachers/CargaDeArchivoTeachers'
import FechaTopeTeachers from '@/components/teachers/FechaTopeTeachers'
import FechaA from '@/components/teachers/FechaA'

import ProportionOfTeachersByRank from '@/components/reports/teachers/ProportionOfTeachersByRank'
import PublicationsPerFaculty from '@/components/reports/teachers/PublicationsPerFaculty'
import TeachersNationalityFaculty from '@/components/reports/teachers/TeachersNationalityFaculty'
import TeachersSexFaculty from '@/components/reports/teachers/TeachersSexFaculty'
import TeachersWithAPhDPerFaculty from '@/components/reports/teachers/TeachersWithAPhDPerFaculty'

//Graduates
import GraduatesPerFaculty from '@/components/reports/graduates/GraduatesPerFaculty'
import GraduatesPerYear from '@/components/reports/graduates/GraduatesPerYear'
import GraduatesYearFaculty from '@/components/reports/graduates/GraduatesYearFaculty'
import GraduatesTrust from '@/components/reports/graduates/GraduatesTrust'

import SystemParameterList from '@/components/config/integration/SystemParameterList'
import SystemParameterEdit from '@/components/config/integration/SystemParameterEdit'
import New from '@/components/admin/New'
import Edit from '@/components/admin/Edit'
import Delete from '@/components/admin/Delete'
import store from '@/store'

import Config from '@/components/Config'
import Main from '@/components/Main'
import Faculty from '@/components/config/faculty/Faculty'
import Profession from '@/components/config/profession/Profession'
import NewFaculty from '@/components/config/faculty/NewFaculty'
import EditFaculty from '@/components/config/faculty/EditFaculty'
import DeleteFaculty from '@/components/config/faculty/DeleteFaculty'
import NewProfession from '@/components/config/profession/NewProfession'
import EditProfession from '@/components/config/profession/EditProfession'
import DeleteProfession from '@/components/config/profession/DeleteProfession'
import MicroservicesError from '@/components/microservices/MicroservicesError'


Vue.use(Router)

export const router = new Router({
      // base: '/ucrankings',
      routes: [{
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/',
          component: Dashboard,
          redirect: '/home',
          children: [{
              path: '/home',
              name: 'Home',
              component: Home
            },
            {
              path: '/reports',
              name: 'ReportsHome',
              component: ReportsHome,
              beforeEnter(to, from, next) {
                console.log("AQYUIIIIIII: " + store.state.user);
                //store.state.user = JSON.parse(store.state.user);
                if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                  console.log("No entro");
                  next('/home')
                } else {
                  console.log("vamos a integracion");
                  next()
                }
              }
            },

            // {
            //   path: '/report/ProportionOfInternationalFaculty',
            //   name: 'ProportionOfInternationalFaculty',
            //   component: ProportionOfInternationalFaculty,
            //   beforeEnter(to, from, next) {
            //     console.log("AQYUIIIIIII: " + store.state.user);
            //     //store.state.user = JSON.parse(store.state.user);
            //     if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
            //       console.log("No entro");
            //       next('/home')
            //     } else {
            //       console.log("vamos a integracion");
            //       next()
            //     }
            //   }
            // },
            // {
            //   path: '/report/ProportionOfInternationalStudents',
            //   name: 'ProportionOfInternationalStudents',
            //   component: ProportionOfInternationalStudents,
            //   beforeEnter(to, from, next) {
            //     console.log("AQYUIIIIIII: " + store.state.user);
            //     //store.state.user = JSON.parse(store.state.user);
            //     if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
            //       console.log("No entro");
            //       next('/home')
            //     } else {
            //       console.log("vamos a integracion");
            //       next()
            //     }
            //   }
            // },
            // {
            //   path: '/report/CitationsPerFaculty',
            //   name: 'CitationsPerFaculty',
            //   component: CitationsPerFaculty,
            //   beforeEnter(to, from, next) {
            //     console.log("AQYUIIIIIII: " + store.state.user);
            //     //store.state.user = JSON.parse(store.state.user);
            //     if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
            //       console.log("No entro");
            //       next('/home')
            //     } else {
            //       console.log("vamos a integracion");
            //       next()
            //     }
            //   }
           // },

            
            /**STUDENTS REPORTS */


            {
              path: '/configreportsstudents',
              name: 'ConfigReportsStudents',
              component: ConfigReportsStudents,
              children: [
                {
                  path: '/report/ProportionOfStudentsPerFaculty',
                  name: 'ProportionOfStudentsPerFaculty',
                  component: ProportionOfStudentsPerFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },

                {
                  path: '/report/StudentsDisabilityPerFaculty',
                  name: 'StudentsDisabilityPerFaculty',
                  component: StudentsDisabilityPerFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/StudentsEthnicGroupsPerFaculty',
                  name: 'StudentsEthnicGroupsPerFaculty',
                  component: StudentsEthnicGroupsPerFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/StudentsSexFaculty',
                  name: 'StudentsSexFaculty',
                  component: StudentsSexFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/StudentsPerYear',
                  name: 'StudentsPerYear',
                  component: StudentsPerYear,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/ForeignStudentsPerFaculty',
                  name: 'ForeignStudentsPerFaculty',
                  component: ForeignStudentsPerFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/StudentsYearFaculty',
                  name: 'StudentsYearFaculty',
                  component: StudentsYearFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/UndergraduateStudentsNationality',
                  name: 'UndergraduateStudentsNationality',
                  component: UndergraduateStudentsNationality,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/UndergraduateStudentsSex',
                  name: 'UndergraduateStudentsSex',
                  component: UndergraduateStudentsSex,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },

                {
                  path: '/report/ProportionOfInternationalStudents',
                  name: 'ProportionOfInternationalStudents',
                  component: ProportionOfInternationalStudents,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },              
                {
                  path: '/report/FacultyStudentRatioStudent',
                  name: 'FacultyStudentRatioStudent',
                  component: FacultyStudentRatioStudent,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                }

              ]
            },

        

            {
              path: '/configreportsteachers',
              name: 'ConfigReportsTeachers',
              component: ConfigReportsTeachers,
              children: [
                {
                  path: '/report/TeachersWithAPhDPerFaculty',
                  name: 'TeachersWithAPhDPerFaculty',
                  component: TeachersWithAPhDPerFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },

                {
                  path: '/report/TeachersNationalityFaculty',
                  name: 'TeachersNationalityFaculty',
                  component: TeachersNationalityFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/ProportionOfTeachersByRank',
                  name: 'ProportionOfTeachersByRank',
                  component: ProportionOfTeachersByRank,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/TeachersSexFaculty',
                  name: 'TeachersSexFaculty',
                  component: TeachersSexFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/PublicationsPerFaculty',
                  name: 'PublicationsPerFaculty',
                  component: PublicationsPerFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/CitationsPerFaculty',
                  name: 'CitationsPerFaculty',
                  component: CitationsPerFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/StaffWithAPhD',
                  name: 'StaffWithAPhD',
                  component: StaffWithAPhD,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/ProportionOfInternationalFaculty',
                  name: 'ProportionOfInternationalFaculty',
                  component: ProportionOfInternationalFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/PublicationsPerTeacher',
                  name: 'PublicationsPerTeacher',
                  component: PublicationsPerTeacher,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },

                {
                  path: '/report/FacultyStudentRatioTeacher',
                  name: 'FacultyStudentRatioTeacher',
                  component: FacultyStudentRatioTeacher,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                }
              ]
            },

          
            {
              path: '/configreportsgraduates',
              name: 'ConfigReportsGraduates',
              component: ConfigReportsGraduates,
              children: [
                {
                  path: '/report/GraduatesPerFaculty',
                  name: 'GraduatesPerFaculty',
                  component: GraduatesPerFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },

                {
                  path: '/report/GraduatesPerYear',
                  name: 'GraduatesPerYear',
                  component: GraduatesPerYear,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                // {
                //   path: '/report/GraduatesYearFaculty',
                //   name: 'GraduatesYearFaculty',
                //   component: GraduatesYearFaculty,
                //   beforeEnter (to, from, next) {
                //     console.log("AQYUIIIIIII: " + store.state.user);
                //     //store.state.user = JSON.parse(store.state.user);
                //     if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                //       console.log("No entro");
                //       next('/home')
                //     } else {
                //       console.log("vamos a integracion");
                //       next()
                //     }
                //   }
                // },
                {
                  path: '/report/GraduatesYearFaculty',
                  name: 'GraduatesYearFaculty',
                  component: GraduatesYearFaculty,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/GraduatesTrust',
                  name: 'GraduatesTrust',
                  component: GraduatesTrust,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                },
                {
                  path: '/report/Employability',
                  name: 'Employability',
                  component: Employability,
                  beforeEnter (to, from, next) {
                    console.log("AQYUIIIIIII: " + store.state.user);
                    //store.state.user = JSON.parse(store.state.user);
                    if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                      console.log("No entro");
                      next('/home')
                    } else {
                      console.log("vamos a integracion");
                      next()
                    }
                  }
                }
              
              ]

            },



              /*
                      {
                        path: '/report/ProportionOfStudentsPerFaculty',
                        name: 'ProportionOfStudentsPerFaculty',
                        component: ConfigReportsStudents,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },

                      
                      {
                        path: '/report/StaffWithAPhD',
                        name: 'StaffWithAPhD',
                        component: StaffWithAPhD,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/PublicationsPerTeacher',
                        name: 'PublicationsPerTeacher',
                        component: PublicationsPerTeacher,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/FacultyStudentRatioStudent',
                        name: 'FacultyStudentRatioStudent',
                        component: FacultyStudentRatioStudent,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/FacultyStudentRatioTeacher',
                        name: 'FacultyStudentRatioTeacher',
                        component: FacultyStudentRatioTeacher,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/ForeignStudentsPerFaculty',
                        name: 'ForeignStudentsPerFaculty',
                        component: ForeignStudentsPerFaculty,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },         
                   
                      
                      {
                        path: '/report/StudentsDisabilityPerFaculty',
                        name: 'StudentsDisabilityPerFaculty',
                        component: StudentsDisabilityPerFaculty,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },               
                      {
                        path: '/report/StudentsEthnicGroupsPerFaculty',
                        name: 'StudentsEthnicGroupsPerFaculty',
                        component: StudentsEthnicGroupsPerFaculty,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/StudentsSexFaculty',
                        name: 'StudentsSexFaculty',
                        component: StudentsSexFaculty,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/StudentsPerYear',
                        name: 'StudentsPerYear',
                        component: StudentsPerYear,
                        beforeEnter (to, from, next) {
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            next('/home')
                          } else {
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/StudentsYearFaculty',
                        name: 'StudentsYearFaculty',
                        component: StudentsYearFaculty,
                        beforeEnter (to, from, next) {
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            next('/home')
                          } else {
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/UndergraduateStudentsNationality',
                        name: 'UndergraduateStudentsNationality',
                        component: UndergraduateStudentsNationality,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/UndergraduateStudentsSex',
                        name: 'UndergraduateStudentsSex',
                        component: UndergraduateStudentsSex,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      
                   
                      {
                        path: '/report/ProportionOfTeachersByRank',
                        name: 'ProportionOfTeachersByRank',
                        component: ProportionOfTeachersByRank,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/PublicationsPerFaculty',
                        name: 'PublicationsPerFaculty',
                        component: PublicationsPerFaculty,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/TeachersNationalityFaculty',
                        name: 'TeachersNationalityFaculty',
                        component: TeachersNationalityFaculty,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/TeachersSexFaculty',
                        name: 'TeachersSexFaculty',
                        component: TeachersSexFaculty,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/TeachersWithAPhDPerFaculty',
                        name: 'TeachersWithAPhDPerFaculty',
                        component: TeachersWithAPhDPerFaculty,
                        beforeEnter (to, from, next) {
                          console.log("AQYUIIIIIII: " + store.state.user);
                          //store.state.user = JSON.parse(store.state.user);
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            console.log("No entro");
                            next('/home')
                          } else {
                            console.log("vamos a integracion");
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/GraduatesPerFaculty',
                        name: 'GraduatesPerFaculty',
                        component: GraduatesPerFaculty,
                        beforeEnter (to, from, next) {
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            next('/home')
                          } else {
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/GraduatesPerYear',
                        name: 'GraduatesPerYear',
                        component: GraduatesPerYear,
                        beforeEnter (to, from, next) {
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            next('/home')
                          } else {
                            next()
                          }
                        }
                      },
                      {
                        path: '/report/GraduatesYearFaculty',
                        name: 'GraduatesYearFaculty',
                        component: GraduatesYearFaculty,
                        beforeEnter (to, from, next) {
                          if (store.state.user.name != "verificador" && store.state.user.name != "vicerrector" && store.state.user.name != "administrador") {
                            next('/home')
                          } else {
                            next()
                          }
                        }
                      },

              */
              {
                path: '/config',
                name: 'Config',
                component: Config,
                children: [
                  {
                    path: '/faculty',
                    name: 'Faculty',
                    component: Faculty
                  },
                  {
                    path: '/faculty/new',
                    name: 'NewFaculty',
                    component: NewFaculty
                  },
                  {
                    path: '/faculty/edit/:id',
                    name: 'EditFaculty',
                    component: EditFaculty
                  },
                  {
                    path: '/faculty/delete/:id',
                    name: 'DeleteFaculty',
                    component: DeleteFaculty
                  },
                  {
                    path: '/profession',
                    name: 'Profession',
                    component: Profession
                  },
                  {
                    path: '/profession/new',
                    name: 'NewProfession',
                    component: NewProfession
                  },
                  {
                    path: '/profession/edit/:id',
                    name: 'EditProfession',
                    component: EditProfession
                  },
                  {
                    path: '/profession/delete/:id',
                    name: 'DeleteProfession',
                    component: DeleteProfession
                  },
                  {
                    path: '/integration',
                    name: 'SystemParameterList',
                    component: SystemParameterList,
                    beforeEnter(to, from, next) {
                      if (store.state.user.name != "administrador") {
                        next('/home')
                      } else {
                        next()
                      }
                    }
                  },
                  {
                    path: '/integration/edit/:id',
                    name: 'SystemParameterEdit',
                    component: SystemParameterEdit,
                    beforeEnter(to, from, next) {
                      if (store.state.user.name != "administrador") {
                        next('/home')
                      } else {
                        next()
                      }
                    }
                  },
                  {
                    path: '/admin',
                    name: 'Admin',
                    component: Users,
                    beforeEnter(to, from, next) {
                      console.log(store.state.user.name);
                      if (store.state.user.name != "administrador") {
                        console.log("No entro");
                        next('/home')
                      } else {
                        console.log("vamos a integracion");
                        next()
                      }
                    }
                  },
                  {
                    path: '/admin/new',
                    name: 'New',
                    component: New,
                    beforeEnter(to, from, next) {
                      console.log(store.state.user.name);
                      if (store.state.user.name != "administrador") {
                        console.log("No entro");
                        next('/home')
                      } else {
                        console.log("vamos a integracion");
                        next()
                      }
                    }
                  },
                  {
                    path: '/admin/edit/:id',
                    name: 'Edit',
                    component: Edit,
                    beforeEnter(to, from, next) {
                      console.log(store.state.user.name);
                      if (store.state.user.name != "administrador") {
                        console.log("No entro");
                        next('/home')
                      } else {
                        console.log("vamos a integracion");
                        next()
                      }
                    }
                  },
                  {
                    path: '/admin/delete/:id',
                    name: 'Delete',
                    component: Delete,
                    beforeEnter(to, from, next) {
                      console.log(store.state.user.name);
                      if (store.state.user.name != "administrador") {
                        console.log("No entro");
                        next('/home')
                      } else {
                        console.log("vamos a integracion");
                        next()
                      }
                    }
                  },
                  {
                    path: '/microservices',
                    name: 'MicroservicesError',
                    component: MicroservicesError,
                    beforeEnter (to, from, next) {
                      console.log(store.state.user.name);
                      if (store.state.user.name != "administrador") {
                        console.log("No entro");
                        next('/home')
                      } else {
                        console.log("vamos a integracion");
                        next()
                      }
                    }
                  }
                ]
              },
              {
                path: '/audit',
                name: 'AuditList',
                component: AuditList,
                beforeEnter(to, from, next) {
                  console.log(store.state.user.name);
                  if (store.state.user.name != "administrador") {
                    console.log("No entro");
                    next('/home')
                  } else {
                    console.log("vamos a integracion");
                    next()
                  }
                }
              },
              {
                path: '/configStudents',
                name: 'Students',
                component: ConfigEstudiante,
                children: [
                  {
                    path: '/CargaDeArchivoStudents',
                    name: 'CargaDeArchivoStudents',
                    component: CargaDeArchivoStudents,
                  },
                  {
                    path: '/FechaTopeStudents',
                    name: 'FechaTopeStudents',
                    component: FechaTopeStudents,
                  },
                  {
                    path: '/FechaActualizacionStudents',
                    name: 'FechaActualizacionStudents',
                    component: FechaActualizacionStudents,
                  }
                ]
              },
              , 
              {
                path: '/configTeachers',
                name: 'Teachers',
                component: ConfigDocente,
                children: [
                  {
                    path: '/CargaDeArchivoTeachers',
                    name: 'CargaDeArchivoTeachers',
                    component: CargaDeArchivoTeachers,
                  },
                  {
                    path: '/FechaTopeTeachers',
                    name: 'FechaTopeTeachers',
                    component: FechaTopeTeachers,
                  },
                  {
                    path: '/FechaA',
                    name: 'FechaA',
                    component: FechaA,
                  }
                ]
              }
            ]
          }
        ],
        mode: 'history',
      });

    router.beforeEach((to, from, next) => {
      // redirect to login page if not logged in and trying to access a restricted page
      const publicPages = ['/login'];
      const authRequired = !publicPages.includes(to.path);

      if (authRequired && !localStorage.getItem('user')) {

        store.user = {};
        next('/login');

      } else {
        store.state.user = JSON.parse(localStorage.getItem('user'));

        next();
      }

    })
