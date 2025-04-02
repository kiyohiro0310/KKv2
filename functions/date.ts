import { recordType } from "@/dev";

export function datefunc(posts: recordType[]) {
    let allDates: string[] = [];
    let uniqueDates: Date[] = [];
  
    allDates = posts
      .flat()
      .map((post) => post.date);
  
    uniqueDates = [...new Set(allDates)]
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
      .map(date => new Date(date));
  
    const uniqueResults = Array.from(
      new Map(
        uniqueDates.map(date => {
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const count = allDates.filter(d => new Date(d).getFullYear() === year && new Date(d).getMonth() + 1 === month).length;
          return [`${year}-${month}`, { month, year, count }];
        })
      ).values()
    );

    return uniqueResults;
}
