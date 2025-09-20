function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  
  export async function mockBatchAnalyze(question, files) {
    return Promise.all(
      files.map(async (f, i) => {
        await wait(400 + Math.random() * 600);
        const hint = (f.name || `image-${i + 1}`).toLowerCase();
        let insight = "No obvious issues detected.";
  
        if (/book|stack|novel|read/.test(hint)) {
          insight = "Looks like a stack of books; ensure consistent angles and no glare.";
        } else if (/shoe|sneaker|boot/.test(hint)) {
          insight = "Check for scuffs and even lighting on the uppers and soles.";
        } else if (/dress|shirt|top/.test(hint)) {
          insight = "Verify wrinkles are steamed and background is dust-free.";
        }
  
        return `Q: ${question}\nA: ${insight}`;
      })
    );
  }
  