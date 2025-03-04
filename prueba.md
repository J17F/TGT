erDiagram
    PACIENTES {
        INT Registro PK
        VARCHAR Historia
        VARCHAR Apellidos
        VARCHAR Nombres
        DATE FechaNacimiento
        VARCHAR LugarNacimiento
        VARCHAR Cedula
        VARCHAR Correo
        VARCHAR Direccion
        VARCHAR Telefonos
        TEXT AntecedentesPersonales
        TEXT AntecedentesFamiliares
        TEXT AntecedentesClinicos
        DATE Menarquia
        VARCHAR Ciclos
        VARCHAR Caracter
        VARCHAR PRS
        VARCHAR PS
        TEXT Observacion
    }

    CONSULTA {
        INT Registro PK
        DATE Fecha
        TEXT Consulta
        INT RegistroPaciente FK
    }

    CITAS {
        INT id_cita PK
        INT id_paciente FK (OPCIONAL)
        DATE fecha
        TIME hora
        VARCHAR tipo_consulta
        VARCHAR estado
    }

    PACIENTES ||--o{ CONSULTA : "Un paciente puede tener muchas consultas"
    PACIENTES ||--o{ CITAS : "Un paciente puede tener muchas citas"
    CITAS }|--|| PACIENTES : "Una cita pertenece a un paciente"
