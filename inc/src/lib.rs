use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn inc(x: i32) -> i32 {
    x + 1
}
