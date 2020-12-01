import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MenuItem } from 'primeng/api';

import { Categoria } from "../shared/categoria.model";
import { CategoriaService } from "../shared/categoria.service";

import { switchMap } from "rxjs/operators";

import toastr from "toastr";

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoriaForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  categoria: Categoria = new Categoria();

  items: MenuItem[];
  home: MenuItem;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.items = [{ label: 'Categorias' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoriaForm();
    this.loadCategoria();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;

    if (this.currentAction == "new")
      this.createCategoria();
    else // currentAction == "edit"
      this.updateCategoria();
  }


  // PRIVATE METHODS

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }

  private buildCategoriaForm() {
    this.categoriaForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    });
  }

  private loadCategoria() {
    if (this.currentAction == "edit") {

      this.route.paramMap.pipe(
        switchMap(params => this.categoriaService.getById(+params.get("id")))
      )
        .subscribe(
          (categoria) => {
            this.categoria = categoria;
            this.categoriaForm.patchValue(categoria) // binds loaded categoria data to CategoriaForm
          },
          (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
        )
    }
  }


  private setPageTitle() {
    if (this.currentAction == 'new')
      this.pageTitle = "Cadastro de Nova Categoria"
    else {
      const categoriaName = this.categoria.name || ""
      this.pageTitle = "Editando Categoria: " + categoriaName;
    }
    this.items = [...[{ label: 'Categorias' }], { label: this.pageTitle }];
  }


  private createCategoria() {
    const categoria: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);

    this.categoriaService.create(categoria)
      .subscribe(
        categoria => this.actionsForSuccess(categoria),
        error => this.actionsForError(error)
      )
  }


  private updateCategoria() {
    const categoria: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);

    this.categoriaService.update(categoria)
      .subscribe(
        categoria => this.actionsForSuccess(categoria),
        error => this.actionsForError(error)
      )
  }


  private actionsForSuccess(categoria: Categoria) {
    toastr.success("Solicitação processada com sucesso!");

    // redirect/reload component page
    this.router.navigateByUrl("categorias", { skipLocationChange: true }).then(
      () => this.router.navigate(["categorias", categoria.id, "edit"])
    )
  }


  private actionsForError(error) {
    toastr.error("Ocorreu um erro ao processar a sua solicitação!");

    this.submittingForm = false;

    if (error.status === 422)
      this.serverErrorMessages = JSON.parse(error._body).errors;
    else
      this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor, tente mais tarde."]
  }
}
