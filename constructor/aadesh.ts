const age: string[] = ["20", "30", "50"];

const age2: number[] = [20];

const age3: Array<string | number> = [20, "20"];

const age4: (string | number)[] = [];

interface info {
  name: string;
  age: number;
  city?: boolean;
}

const shubham: info = {
  name: "sh",
  age: 20,
};
