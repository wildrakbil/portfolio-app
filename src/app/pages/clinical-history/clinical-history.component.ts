import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { RegexPatterns } from "../../constants/RegexPatterns";

@Component({
  selector: "app-clinical-history",
  templateUrl: "./clinical-history.component.html",
  styleUrls: ["./clinical-history.component.scss"],
})
export class ClinicalHistoryComponent implements OnInit {
  public domain = "webrtc.answering.com.co";
  public options: any;
  public api: any;
  public meetInProgress = false;
  public fg0: FormGroup;
  public fg1: FormGroup;
  public fg2: FormGroup;
  public fg3: FormGroup;
  public videoSpinner = false;
  public meetLink = "https://webrtc.answering.com.co/";
  public meetPassword = "";
  public docTypes = [
    { id: 1, value: "Cédula de ciudadanía" },
    { id: 2, value: "Pasaporte" },
    { id: 3, value: "Tarjeta de identidad" },
    { id: 4, value: "Registro civil" },
    { id: 5, value: "NUIP" },
  ];
  public genders = [
    { id: 1, value: "Femenino" },
    { id: 2, value: "Masculino" },
  ];
  public maritalStatuses = [
    { id: 1, value: "Soltero" },
    { id: 2, value: "Casado" },
    { id: 3, value: "Divorciado" },
  ];
  public companionRelationships = [
    { id: 1, value: "Padre" },
    { id: 2, value: "Hijo" },
    { id: 3, value: "Abuelo" },
  ];

  constructor(
    private readonly fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.fg0 = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      lastName: [null, [Validators.required, Validators.maxLength(50)]],
      docType: [null, [Validators.required]],
      document: [null, [Validators.required]],
      birthDate: [null],
      gender: [null, [Validators.required]],
      occupation: [null],
      email: [
        null,
        [Validators.required, Validators.pattern(RegexPatterns.PATTERN_EMAIL)],
      ],
      phone: [null],
      mobilePhone: [
        null,
        [
          Validators.required,
          RegexPatterns.mobilePattern,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      address: [null, [Validators.maxLength(50)]],
      maritalStatus: [null],
      city: [null],
      companionName: [null, [Validators.maxLength(100)]],
      companionRelationship: [null],
      companionPhone: [null],
      eps: [null, [Validators.required]],
      subscriptionType: [null],
    });

    this.fg1 = this.fb.group({
      consultationPurpose: [null, [Validators.required]],
      externalCause: [null, [Validators.required]],
      principalDiagnostic: [null, [Validators.required]],
      relatedDiagnosis1: [null],
      relatedDiagnosis2: [null],
      relatedDiagnosis3: [null],
      mainDiagnosisType: [null],
      consultationValue: [null],
      feeValue: [null],
      totalValuePaidForEAPB: [null],
      videoCallRecord: [null],
    });

    this.fg2 = this.fb.group({
      procedureDate: [null],
      authorizationNumber: [null],
      procedureCoode: [null],
      scopeProcedure: [null],
      procedurePurpose: [null],
      mainDiagnosis: [null],
      relatedDiagnosis: [null],
      complication: [null],
      performingMethod: [null],
      procedureValue: [null],
    });

    this.fg3 = this.fb.group({
      // medicines info
      medicationCode: [null],
      medicationType: [null],
      genericNameSubstance: [null],
      pharmaceuticalForm: [null],
      concentration: [null],
      unitMedicine: [null],
    });
  }

  public startMeet() {
    if (!this.meetInProgress) {
      this.meetInProgress = true;
      this.videoSpinner = true;
      setTimeout((_) => {
        const meetId = "";
        this.meetLink += meetId;
        this.meetPassword = "" + Math.floor(Math.random() * 1000000000);
        this.options = {
          roomName: meetId,
          width: "100%",
          height: 400,
          parentNode: document.querySelector("#meet"),
        };
        //this.api = new JitsiMeetExternalAPI(this.domain, this.options);
        this.api.executeCommand("password", this.meetPassword);
        this.videoSpinner = false;
      }, 2000);
    }
  }

  public copyInClipboard() {
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = this.meetLink;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);

    this.openSnackBar("El link fue copiado", "");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
