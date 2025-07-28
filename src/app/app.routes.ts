import { Routes } from '@angular/router';
import {Counter} from './components/counter/counter';
import {Series} from './pages/series/series';

export const routes: Routes = [
  {path: "components", component: Counter},
  {path: "components", component: Series}
];
