import { Column } from '../../OrmBundle/annotation';

export class User {
    
    @Column({ primaryKey: true, type: 'integer' })
    id: number;

    @Column({ type: 'string' })
    name: string;
};
