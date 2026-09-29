import { PartialType } from '@nestjs/swagger'
import { CreateEmprendedorDto } from './create-emprendedore.dto.js'

export class UpdateEmprendedorDto extends PartialType(CreateEmprendedorDto) {}