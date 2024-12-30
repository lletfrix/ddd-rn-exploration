export interface RepositoryInterface<DomainModel, PersistenceModel = DomainModel> {
  select(): Promise<DomainModel[]>;
  selectById(id: string): Promise<DomainModel | null>;
  insert(entity: DomainModel): Promise<DomainModel>;
  update(entity: DomainModel): Promise<DomainModel>;
  delete(id: string): Promise<void>;

  toDomain(entity: PersistenceModel): DomainModel;
  toPersistence(domain: DomainModel): PersistenceModel;
}
