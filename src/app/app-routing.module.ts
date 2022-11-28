import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from "./pages/chat/chat.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat-engine',
    pathMatch: 'full',
  },
  {
    path: 'chat-engine',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
