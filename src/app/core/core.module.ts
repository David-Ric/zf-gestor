import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Adicione esta linha
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { LayoutPageComponent } from '../shared/components/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { authGuard } from '../auth.guard';
import { ViagensComponent } from './view/cadastros/viagens/viagens.component';
import { ContratosComponent } from './view/cadastros/contratos/contratos.component';
import { ProdutosServicosComponent } from './view/cadastros/produtos-servicos/produtos-servicos.component';
import { PessoasComponent } from './view/cadastros/pessoas/pessoas.component';
import { FuncionariosComponent } from './view/cadastros/funcionarios/funcionarios.component';
import { CategoriasComponent } from './view/cadastros/categorias/categorias.component';
import { DespesasComViagensComponent } from './view/lancamentos/despesas-com-viagens/despesas-com-viagens.component';
import { MedicoesComponent } from './view/lancamentos/medicoes/medicoes.component';
import { ContasPagarReceberComponent } from './view/lancamentos/contas-pagar-receber/contas-pagar-receber.component';
import { ContasCorrentesComponent } from './view/lancamentos/contas-correntes/contas-correntes.component';
import { RelatoriosDespesasViagensComponent } from './view/relatorios/relatorios-despesas-viagens/relatorios-despesas-viagens.component';
import { RelatoriosMedicoesComponent } from './view/relatorios/relatorios-medicoes/relatorios-medicoes.component';
import { RelatoriosContratosComponent } from './view/relatorios/relatorios-contratos/relatorios-contratos.component';
import { RelatoriosContasPagarReceberComponent } from './view/relatorios/relatorios-contas-pagar-receber/relatorios-contas-pagar-receber.component';
import { RelatoriosReceberStatusComponent } from './view/relatorios/relatorios-receber-status/relatorios-receber-status.component';
import { RelatoriosContasCorrentesComponent } from './view/relatorios/relatorios-contas-correntes/relatorios-contas-correntes.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    LayoutPageComponent,
    ViagensComponent,
    ContratosComponent,
    ProdutosServicosComponent,
    PessoasComponent,
    FuncionariosComponent,
    CategoriasComponent,
    DespesasComViagensComponent,
    MedicoesComponent,
    ContasPagarReceberComponent,
    ContasCorrentesComponent,
    RelatoriosDespesasViagensComponent,
    RelatoriosMedicoesComponent,
    RelatoriosContratosComponent,
    RelatoriosContasPagarReceberComponent,
    RelatoriosReceberStatusComponent,
    RelatoriosContasCorrentesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    SharedModule,
  ],
  providers: [
    // Certifique-se de que o guard está registrado aqui
    { provide: 'authGuard', useValue: authGuard }
  ]
})
export class CoreModule { }
