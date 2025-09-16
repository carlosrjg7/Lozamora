interface IJob {
  id: number;
  title: string;
  location: string;
  modality: string;
  posted: string;
  details: string;
  requirements: string[];
  company: string;
  logo: string;
  contractType: string;
  time: string;
}

export type { IJob };
