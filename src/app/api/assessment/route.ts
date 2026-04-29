import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const {
      name,
      email,
      businessName,
      currentTools,
      biggestChallenge,
      mostManualTask,
      whatGetsMissed,
      vertical
    } = body;

    // Log the submission to console
    console.log("========== NEW ASSESSMENT SUBMISSION ==========");
    console.log(`Vertical: ${vertical}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Business: ${businessName}`);
    console.log(`Current Tools: ${currentTools}`);
    console.log(`Biggest Challenge: ${biggestChallenge}`);
    console.log(`Most Manual Task: ${mostManualTask}`);
    console.log(`What Gets Missed: ${whatGetsMissed}`);
    console.log("================================================");

    // TODO: Wire up to Formspree or email service
    // For now, using Formspree free tier (replace with your form ID)
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
    
    // Uncomment and configure when ready:
    // await fetch(FORMSPREE_ENDPOINT, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     businessName,
    //     currentTools,
    //     biggestChallenge,
    //     mostManualTask,
    //     whatGetsMissed,
    //     vertical,
    //     submittedAt: new Date().toISOString()
    //   })
    // });

    return NextResponse.json({ 
      success: true,
      message: "Assessment submitted successfully" 
    });

  } catch (error) {
    console.error("Assessment submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
