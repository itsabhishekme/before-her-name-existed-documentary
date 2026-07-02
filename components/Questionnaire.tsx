"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

type FormData = {
  fullName: string;
  age: string;
  country: string;
  email: string;

  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
  q11: string;
  q12: string;
  q13: string;
  q14: string;
  q15: string;
  q16: string;
  q17: string;
  q18: string;
  q19: string;
  q20: string;

  consent: boolean;
};

export default function Questionnaire() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you! Your story has been submitted successfully.");
        reset();
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to submit your story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="questionnaire"
      className="bg-[#080808] py-24 px-6 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          subtitle="Participant Questionnaire"
          title="Share Your Story"
          description="Your experiences may become part of the documentary. Every story is treated with care and respect."
        />

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-16 space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur"
        >
          {/* Personal Information */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-white">
                Full Name
              </label>

              <input
                {...register("fullName", { required: true })}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Email
              </label>

              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Age
              </label>

              <input
                {...register("age")}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
                placeholder="Age"
              />
            </div>

            <div>
              <label className="mb-2 block text-white">
                Country
              </label>

              <input
                {...register("country")}
                className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
                placeholder="Country"
              />
            </div>
          </div>

          <hr className="border-white/10" />
          {/* ===================== EXPERIENCE ===================== */}

          {/* Question 1 */}
          <div>
            <label className="mb-4 block text-lg font-semibold text-white">
              1. Have you ever felt deeply connected to someone before meeting them?
            </label>

            <div className="flex flex-wrap gap-6">
              {["Yes", "No", "Unsure"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-gray-300">
                  <input type="radio" value={item} {...register("q1")} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              2. Tell us about that experience.
            </label>

            <textarea
              rows={5}
              {...register("q2")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 3 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              3. Have recurring dreams ever introduced someone you've never met?
            </label>

            <textarea
              rows={5}
              {...register("q3")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 4 */}
          <div>
            <label className="mb-4 block text-lg font-semibold text-white">
              4. Do you believe destiny influences human relationships?
            </label>

            <div className="flex flex-wrap gap-6">
              {["Yes", "No", "Maybe"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-gray-300">
                  <input type="radio" value={item} {...register("q4")} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Question 5 */}
          <div>
            <label className="mb-4 block text-lg font-semibold text-white">
              5. Have you experienced an instant feeling of familiarity with someone?
            </label>

            <div className="flex flex-wrap gap-6">
              {["Yes", "No", "Not Sure"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-gray-300">
                  <input type="radio" value={item} {...register("q5")} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Question 6 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              6. Describe the most meaningful coincidence in your life.
            </label>

            <textarea
              rows={6}
              {...register("q6")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 7 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              7. Has intuition ever proven to be more accurate than logic?
            </label>

            <textarea
              rows={5}
              {...register("q7")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 8 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              8. Have you ever experienced synchronicities repeatedly over a short period?
            </label>

            <textarea
              rows={5}
              {...register("q8")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 9 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              9. What event completely changed the direction of your life?
            </label>

            <textarea
              rows={6}
              {...register("q9")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 10 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              10. Did you understand its meaning immediately, or only later?
            </label>

            <textarea
              rows={5}
              {...register("q10")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 11 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              11. Have you ever felt guided by signs that others couldn't explain?
            </label>

            <textarea
              rows={5}
              {...register("q11")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 12 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              12. Describe the strongest emotional connection you've ever experienced.
            </label>

            <textarea
              rows={6}
              {...register("q12")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 13 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              13. Have you ever felt that time stood still during a significant moment?
            </label>

            <textarea
              rows={5}
              {...register("q13")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 14 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              14. Is there a person whose presence permanently changed who you are?
            </label>

            <textarea
              rows={6}
              {...register("q14")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 15 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              15. Have you ever loved someone you couldn't explain?
            </label>

            <textarea
              rows={6}
              {...register("q15")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 16 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              16. What role do you believe fate plays in your personal story?
            </label>

            <textarea
              rows={5}
              {...register("q16")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 17 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              17. If you could relive one moment in your life, which would it be?
            </label>

            <textarea
              rows={6}
              {...register("q17")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 18 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              18. What truth about your journey has taken the longest to accept?
            </label>

            <textarea
              rows={6}
              {...register("q18")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 19 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              19. Why do you believe your story deserves to be documented?
            </label>

            <textarea
              rows={6}
              {...register("q19")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Question 20 */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-white">
              20. If your story became part of "Before Her Name Existed," what message would you want audiences around the world to remember?
            </label>

            <textarea
              rows={7}
              {...register("q20")}
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-amber-400"
            />
          </div>

          {/* Consent */}
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
            <label className="flex items-start gap-3 text-gray-300">
              <input
                type="checkbox"
                {...register("consent", { required: true })}
                className="mt-1"
              />

              <span>
                I voluntarily consent to share my personal experiences with the
                Soulfire Chronicles documentary team. I understand that my submission
                will be reviewed and may be selected for interviews, filming, or
                inclusion in the documentary. I acknowledge that submitting this form
                does not guarantee participation.
              </span>
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-full py-4 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${loading
                ? "cursor-not-allowed bg-gray-500 text-white opacity-80"
                : "bg-amber-400 text-black hover:bg-amber-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              }`}
          >
            {loading ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>

                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>📖 Submit My Story</span>
              </>
            )}
          </button>


        </motion.form>
      </div>
    </section>
  );
}

function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
