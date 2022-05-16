interface QueryObjectType {
  featured?: Boolean;
  company?: string;
  name?: {
    $regex: string;
    $options: string;
  };
}
