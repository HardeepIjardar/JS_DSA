import { divide_among_2 } from "./Q1";
import { test , expect} from "vitest";


test("Q1",
    () =>{
        expect(divide_among_2(8)).toBe("YES")
    }
)