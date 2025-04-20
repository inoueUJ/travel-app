import { signOut } from "@/app/auth";
import { Button } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import type { ClassProp } from "class-variance-authority/types";
import type { ButtonHTMLAttributes, ClassAttributes, JSX } from "react";

export const SignOutButton = (
	props: JSX.IntrinsicAttributes &
		ClassAttributes<HTMLButtonElement> &
		ButtonHTMLAttributes<HTMLButtonElement> &
		VariantProps<
			(
				props?:
					| ({
							variant?:
								| "link"
								| "default"
								| "destructive"
								| "outline"
								| "secondary"
								| "ghost"
								| null
								| undefined;
							size?: "default" | "sm" | "lg" | "icon" | null | undefined;
					  } & ClassProp)
					| undefined,
			) => string
		> & { asChild?: boolean },
) => {
	return (
		<form
			action={async () => {
				"use server";
				await signOut();
			}}
		>
			<Button {...props} />
		</form>
	);
};
