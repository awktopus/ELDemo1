import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users/users.component';
import { DetailsComponent} from './details/details.component';
import { PostsComponent} from './posts/posts.component';
import { ChannelComponent} from './channel/channel.component';
import { ChatComponent} from './chat/chat.component';
import { HomeComponent} from './home/home.component';
import { ContactsComponent} from './contacts/contacts.component';
import { ToolsComponent} from './tools/tools.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'channel',
    component: ChannelComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
