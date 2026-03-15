import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  description: string;
  status: 'Active' | 'Completed' | 'In Progress'; // تحديد قيم ثابتة للحالة
  icon: string;
  color: string;
  dateCreated: string; // إضافة تاريخ الإنشاء
}

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  // بيانات تجريبية تحاكي نظام المستشفى الذكي
  private projectsList: Project[] = [
    { 
      id: 1, 
      name: 'Smart Hospital System', 
      description: 'Integrated platform for hospital management and EMR.', 
      status: 'Active', 
      icon: 'bi-hospital', 
      color: '#0d6efd',
      dateCreated: '2026-03-01'
    },
    { 
      id: 2, 
      name: 'Patient Monitoring App', 
      description: 'Real-time monitoring for ICU patients using IoT sensors.', 
      status: 'In Progress', 
      icon: 'bi-heart-pulse', 
      color: '#dc3545',
      dateCreated: '2026-03-10'
    }
  ];

  constructor() { }

  // جلب كل المشاريع
  getAllProjects(): Project[] {
    return [...this.projectsList]; // إرجاع نسخة لحماية البيانات الأصلية
  }

  // إضافة مشروع جديد مع توليد ID تلقائي
  addProject(project: Omit<Project, 'id'>) {
    const newId = this.projectsList.length > 0 
      ? Math.max(...this.projectsList.map(p => p.id)) + 1 
      : 1;
    
    const newProject: Project = { ...project, id: newId };
    this.projectsList.push(newProject);
  }

  // البحث عن مشروع بالـ ID
  getProjectById(id: number): Project | undefined {
    return this.projectsList.find(p => p.id === id);
  }

  // حذف مشروع (مهم جداً لإدارة النظام)
  deleteProject(id: number) {
    this.projectsList = this.projectsList.filter(p => p.id !== id);
  }
}