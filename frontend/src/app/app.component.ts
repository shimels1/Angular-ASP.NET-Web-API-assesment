import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from './model/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AppComponent implements OnInit {
  users!: User[];
  userDialog: boolean = false;

  submitted: boolean = false;
  user!: User;
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.getAllUser();
  }
  getAllUser() {
    this.userService.getAllUser().subscribe((data) => {
      this.users = data;
    });
  }
  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  saveUser() {
    if (this.user.name?.trim()) {
      if (this.user.id) {
        this.userService
          .updateUser(this.user.id, this.user)
          .subscribe((result: any) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'User Updated',
              life: 3000,
            });
            this.submitted = true;
            this.users = [...this.users];
            this.userDialog = false;
            this.user = {};

            this.getAllUser();
          });
      } else {
        this.userService.addUser(this.user).subscribe((result: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'User Created',
            life: 3000,
          });
          this.submitted = true;
          this.users = [...this.users];
          this.userDialog = false;
          this.user = {};

          this.getAllUser();
        });
      }
    }
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  edituser(user: User) {
    this.user = { ...user };
    this.userDialog = true;
  }

  deleteuser(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteUser(user.id).subscribe((res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'user Deleted',
            life: 3000,
          });
          this.getAllUser();
        });
      },
    });
  }
}
