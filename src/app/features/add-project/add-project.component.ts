import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-add-project',
  standalone: false,
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  projectForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      status: ['Active', [Validators.required]],
      category: [''],
      vendor: [''],
      tags: ['']
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      // إرسال البيانات للسيرفس (السيرفر)
      this.projectService.addProject(this.projectForm.value);
      
      // الرجوع للقائمة بعد الحفظ
      this.router.navigate(['/projects']);
    } else {
      // إظهار الأخطاء لو الفورم غير صالح
      this.projectForm.markAllAsTouched();
    }
  }
}