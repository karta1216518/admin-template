export interface IRoute {
  title: string;
  to: string;
  icon?: string;
  children?: IRoute[];
}
