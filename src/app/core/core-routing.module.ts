import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { LayoutPageComponent } from '../shared/components/layout-page/layout-page.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { CategoriasComponent } from './view/cadastros/categorias/categorias.component';
import { ContratosComponent } from './view/cadastros/contratos/contratos.component';
import { FuncionariosComponent } from './view/cadastros/funcionarios/funcionarios.component';
import { PessoasComponent } from './view/cadastros/pessoas/pessoas.component';
import { ProdutosServicosComponent } from './view/cadastros/produtos-servicos/produtos-servicos.component';
import { ViagensComponent } from './view/cadastros/viagens/viagens.component';
import { MedicoesComponent } from './view/lancamentos/medicoes/medicoes.component';
import { ContasPagarReceberComponent } from './view/lancamentos/contas-pagar-receber/contas-pagar-receber.component';
import { ContasCorrentesComponent } from './view/lancamentos/contas-correntes/contas-correntes.component';
import { RelatoriosDespesasViagensComponent } from './view/relatorios/relatorios-despesas-viagens/relatorios-despesas-viagens.component';
import { RelatoriosMedicoesComponent } from './view/relatorios/relatorios-medicoes/relatorios-medicoes.component';
import { RelatoriosContratosComponent } from './view/relatorios/relatorios-contratos/relatorios-contratos.component';
import { RelatoriosContasPagarReceberComponent } from './view/relatorios/relatorios-contas-pagar-receber/relatorios-contas-pagar-receber.component';
import { RelatoriosReceberStatusComponent } from './view/relatorios/relatorios-receber-status/relatorios-receber-status.component';
import { RelatoriosContasCorrentesComponent } from './view/relatorios/relatorios-contas-correntes/relatorios-contas-correntes.component';
import { MenuMobileComponent } from '../shared/components/menu-mobile/menu-mobile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      // Rotas de Cadastros
      { path: 'cadastros/categorias', component: CategoriasComponent },
      { path: 'cadastros/contratos', component: ContratosComponent },
      { path: 'cadastros/funcionarios', component: FuncionariosComponent },
      { path: 'cadastros/pessoas', component: PessoasComponent },
      { path: 'cadastros/produtos-servicos', component: ProdutosServicosComponent },
      { path: 'cadastros/viagens', component: ViagensComponent },
      // Rotas de Lançamentos
      { path: 'lancamentos/despesas-viagens', component: ViagensComponent },
      { path: 'lancamentos/medicoes', component: MedicoesComponent },
      { path: 'lancamentos/contas-pagar-receber', component: ContasPagarReceberComponent },
      { path: 'lancamentos/contas-correntes', component: ContasCorrentesComponent },
      // Rotas de Relatórios
      { path: 'relatorios/relatorios-despesas-viagens', component: RelatoriosDespesasViagensComponent },
      { path: 'relatorios/relatorios-medicoes', component: RelatoriosMedicoesComponent },
      { path: 'relatorios/relatorios-contratos', component: RelatoriosContratosComponent },
      { path: 'relatorios/relatorios-contas-pagar-receber', component: RelatoriosContasPagarReceberComponent },
      { path: 'relatorios/relatorios-receber-status', component: RelatoriosReceberStatusComponent },
      { path: 'relatorios/relatorios-contas-correntes', component: RelatoriosContasCorrentesComponent },
      //Rota do menu mobile
      { path: 'menu-mobile', component: MenuMobileComponent },
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
