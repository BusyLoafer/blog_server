import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmilesService } from 'src/other/smiles/smiles.service';
import { Repository } from 'typeorm';
import { PersonsService } from '../persons/persons.service';
import { Contact } from './contacts.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { TypeContactsService } from './typeContact.service';

@Injectable()
export class ContactsService {

  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
    private smileServise: SmilesService,
    private personService: PersonsService,
    private typeContactService: TypeContactsService,
  ) { }


  async createContact(dto: CreateContactDto) {

    const contact = new Contact();
    contact.person = await this.personService.getPersonById(dto.personId);
    contact.smile = await this.smileServise.getSmileById(dto.smileId);
    contact.typeContact = await this.typeContactService.findById(dto.typeContactId)
    contact.title = dto.title;
    contact.description = dto.description;

    const newContact = await this.contactRepository.save(contact);
    return newContact;
  }

  async getAllContacts() {
    const contacts = await this.contactRepository.find();
    return contacts;
  }

  async getContactById(id: number) {
    try {
      const contact = await this.contactRepository.findOneByOrFail({ id })
      return contact;
    } catch (error) {
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    }
  }

  async editContact(id: number, dto: CreateContactDto) {
    try {
      const contact = await this.contactRepository.findOneByOrFail({id})
      contact.person = await this.personService.getPersonById(dto.personId);
      contact.smile = await this.smileServise.getSmileById(dto.smileId);
      contact.typeContact = await this.typeContactService.findById(dto.typeContactId)
      contact.title = dto.title;
      contact.description = dto.description;
      await this.contactRepository.save(contact);
      return contact;
    } catch (error) {
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    }
  }
}
