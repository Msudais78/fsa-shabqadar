export type ResultGroup = "HSSC-I" | "HSSC-II";

export interface StudentResult {
  name: string;
  marks: number;
  rollNo: string;
  group: ResultGroup;
  totalMarks: number;
}

export const hsscPart1: StudentResult[] = [
  { name: "Farishta Bibi", marks: 557, rollNo: "706422", group: "HSSC-I", totalMarks: 550 },
  { name: "Aisha Rahmat", marks: 547, rollNo: "706445", group: "HSSC-I", totalMarks: 550 },
  { name: "Manihal Iftikhar", marks: 542, rollNo: "706422", group: "HSSC-I", totalMarks: 550 },
  { name: "Aleesha Iftikhar", marks: 541, rollNo: "706437", group: "HSSC-I", totalMarks: 550 },
  { name: "Malika Zardin", marks: 539, rollNo: "706428", group: "HSSC-I", totalMarks: 550 },
];

export const hsscPart2: StudentResult[] = [
  { name: "Farishta Bibi", marks: 1033, rollNo: "519193", group: "HSSC-II", totalMarks: 1100 },
  { name: "Manahil Iftikhar", marks: 1015, rollNo: "519396", group: "HSSC-II", totalMarks: 1100 },
];

export const allResults = [...hsscPart2, ...hsscPart1];
