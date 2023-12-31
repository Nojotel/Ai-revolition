import * as React from 'react'

interface Props {
	className?: string
}

export const GitHub: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		{...rest}
		className={`${className}`}
	>
		<path
			fill='currentColor'
			d='M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046c.932-.238 1.89-.358 2.851-.356.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032.4.444.5 1.188.571 1.756.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.457 9.457 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.6v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.99c-.955.117-1.756.013-2.437-.276-.712-.302-1.208-.77-1.581-1.218-.354-.424-.74-1.38-1.298-1.566a1 1 0 1 1 .632-1.898c.666.222 1.1.702 1.397 1.088.48.62.87 1.43 1.63 1.753.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581 9.454 9.454 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.72.59-.652 1.584-.267 2.28-.03l.001-.001Z'
		/>
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h24v24H0z' />
			</clipPath>
		</defs>
	</svg>
)

export const VKontakte: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		{...rest}
		className={`${className}`}
	>
		<path
			fill='currentColor'
			d='M21.504 18.38h-2.282c-.863 0-1.123-.698-2.67-2.246-1.352-1.303-1.923-1.465-2.265-1.465-.473 0-.602.13-.602.78v2.053c0 .555-.18.88-1.63.88a8.9 8.9 0 0 1-6.955-4.17 18.18 18.18 0 0 1-3.6-7.558c0-.342.13-.652.782-.652h2.28c.586 0 .797.26 1.027.864 1.107 3.258 2.996 6.092 3.763 6.092.294 0 .422-.13.422-.863V8.739c-.097-1.531-.91-1.66-.91-2.214a.563.563 0 0 1 .585-.523h3.584c.49 0 .652.244.652.83v4.53c0 .489.21.65.358.65.294 0 .52-.161 1.059-.7a18.757 18.757 0 0 0 2.802-4.66.982.982 0 0 1 .993-.65h2.281c.684 0 .829.343.684.83a28.466 28.466 0 0 1-3.062 5.263c-.246.375-.344.57 0 1.01.226.342 1.026 1.01 1.563 1.645.782.78 1.431 1.682 1.922 2.67.196.636-.13.96-.781.96Z'
		/>
	</svg>
)

export const Google: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		{...rest}
		className={`${className}`}
	>
		<path
			fill='currentColor'
			d='M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.601 4.601 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.998 9.998 0 0 1 3.064 7.51Z'
		/>
	</svg>
)

export const EyeOpen: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={15}
		fill='currentColor'
		{...rest}
		className={`${className}`}
	>
		<path
			fillRule='evenodd'
			d='M4.423 7.794a14.85 14.85 0 0 0 1.93 2.641c1.402 1.522 3.363 2.935 5.792 2.935 2.428 0 4.389-1.413 5.791-2.934a14.849 14.849 0 0 0 1.93-2.642 14.848 14.848 0 0 0-1.93-2.641c-1.402-1.522-3.363-2.935-5.791-2.935-2.429 0-4.39 1.413-5.792 2.935a14.849 14.849 0 0 0-1.93 2.641Zm17.035-.36-.003-.005-.009-.017a14.913 14.913 0 0 0-.605-1.045 16.44 16.44 0 0 0-1.762-2.304C17.545 2.399 15.199.625 12.145.625c-3.054 0-5.4 1.774-6.935 3.438A16.437 16.437 0 0 0 2.993 7.13a9.923 9.923 0 0 0-.15.282l-.01.017-.002.006v.002s.003.722-.001.713v-.712a.809.809 0 0 0 0 .712l.004.009.009.018a5.754 5.754 0 0 0 .15.281 16.437 16.437 0 0 0 2.217 3.067c1.534 1.665 3.88 3.438 6.935 3.438 3.053 0 5.4-1.773 6.934-3.438a16.439 16.439 0 0 0 2.217-3.067 10.32 10.32 0 0 0 .15-.281l.01-.018.002-.006v-.001c.048-.096.047-.621 0-.717Z'
			clipRule='evenodd'
		/>
		<path
			fillRule='evenodd'
			d='M12.145 6.201c-.865 0-1.567.713-1.567 1.593s.702 1.593 1.567 1.593 1.566-.713 1.566-1.593-.701-1.593-1.566-1.593ZM9.012 7.794c0-1.76 1.402-3.186 3.133-3.186 1.73 0 3.132 1.426 3.132 3.186s-1.402 3.186-3.132 3.186c-1.73 0-3.133-1.426-3.133-3.186Z'
			clipRule='evenodd'
		/>
		<path
			fillRule='evenodd'
			d='M19.126 3.677c-.461 0-.91.15-1.282.426l-3.97 2.96-.856-1.185 3.97-2.96a3.574 3.574 0 0 1 2.138-.712h4.151c.4 0 .723.33.723.735a.73.73 0 0 1-.723.736h-4.151ZM4.874 11.912c.461 0 .91-.15 1.282-.427l3.97-2.96.856 1.186-3.97 2.96a3.573 3.573 0 0 1-2.138.711H.723A.73.73 0 0 1 0 12.647a.73.73 0 0 1 .723-.735h4.151Z'
			clipRule='evenodd'
		/>
		<path d='M19.518.588a.583.583 0 0 1-.578.588.583.583 0 0 1-.579-.588c0-.325.26-.588.579-.588.32 0 .578.263.578.588ZM21.542.588a.583.583 0 0 1-.578.588.583.583 0 0 1-.578-.588c0-.325.258-.588.578-.588.32 0 .578.263.578.588ZM23.566.588a.583.583 0 0 1-.578.588.583.583 0 0 1-.578-.588c0-.325.259-.588.578-.588.32 0 .578.263.578.588ZM5.639 14.412A.583.583 0 0 1 5.06 15a.583.583 0 0 1-.578-.588c0-.325.259-.588.578-.588.32 0 .579.263.579.588Z' />
		<path
			fillRule='evenodd'
			d='M0 14.412c0-.244.194-.441.434-.441h3.325c.24 0 .434.197.434.44a.438.438 0 0 1-.434.442H.434A.438.438 0 0 1 0 14.412Z'
			clipRule='evenodd'
		/>
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h24v15H0z' />
			</clipPath>
		</defs>
	</svg>
)

export const EyeClose: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={20}
		fill='currentColor'
		{...rest}
		className={`${className}`}
	>
		<path
			fillRule='evenodd'
			d='M4.55.244a.902.902 0 0 0-1.234 0 .807.807 0 0 0 0 1.179l3.73 3.563a16.366 16.366 0 0 0-3.882 4.62c-.134.239-.011.767-.011.767v.001l.001.002.003.006.01.018a6.938 6.938 0 0 0 .167.295 17.356 17.356 0 0 0 2.47 3.208c1.71 1.742 4.324 3.597 7.726 3.597h.014a9.987 9.987 0 0 0 5.07-1.466l3.897 3.722a.902.902 0 0 0 1.233 0 .807.807 0 0 0 0-1.179l-4.406-4.209-.018-.016L8.972 4.468a.842.842 0 0 0-.017-.016L4.55.244Zm3.734 5.924a14.722 14.722 0 0 0-3.354 3.835 15.68 15.68 0 0 0 2.148 2.76c1.561 1.591 3.743 3.068 6.445 3.07a8.198 8.198 0 0 0 3.821-1.012l-2.025-1.934a3.628 3.628 0 0 1-3.16.267 3.506 3.506 0 0 1-1.162-.735 3.326 3.326 0 0 1-.768-1.108 3.203 3.203 0 0 1 .279-3.02L8.284 6.169Zm3.526 3.367a1.601 1.601 0 0 0 .037 1.152c.088.207.218.396.384.554.166.158.363.283.58.367a1.817 1.817 0 0 0 1.206.035L11.81 9.535ZM11.897 4.345a7.401 7.401 0 0 1 1.631-.178h.002c2.705 0 4.89 1.478 6.453 3.07a15.669 15.669 0 0 1 2.148 2.761c-.451.75-.972 1.461-1.556 2.124a.808.808 0 0 0 .106 1.174.901.901 0 0 0 1.23-.101 16.229 16.229 0 0 0 1.986-2.802.807.807 0 0 0 .01-.769l-.004-.006-.01-.018a15.254 15.254 0 0 0-.674-1.094 17.357 17.357 0 0 0-1.963-2.41C19.546 4.357 16.933 2.5 13.53 2.5a9.225 9.225 0 0 0-2.032.222c-.469.105-.76.553-.65 1.001.11.448.579.727 1.048.622ZM13.53 2.5h.001Z'
			clipRule='evenodd'
		/>
		<path
			fillRule='evenodd'
			d='M5.43 14.308c.514 0 1.014-.157 1.429-.447l4.423-3.097.953 1.241-4.424 3.097a4.155 4.155 0 0 1-2.38.744H.804c-.444 0-.805-.344-.805-.769 0-.425.36-.77.805-.77H5.43Z'
			clipRule='evenodd'
		/>
		<path d='M6.282 16.923c0 .34-.289.615-.644.615-.356 0-.645-.275-.645-.615 0-.34.289-.615.645-.615.355 0 .644.275.644.615Z' />
		<path
			fillRule='evenodd'
			d='M0 16.923c0-.255.216-.462.483-.462h3.705c.267 0 .483.207.483.462a.473.473 0 0 1-.483.462H.483A.473.473 0 0 1 0 16.922Z'
			clipRule='evenodd'
		/>
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h24v20H0z' />
			</clipPath>
		</defs>
	</svg>
)

export const Book: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		{...rest}
		className={`${className}`}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M6.5 3A1.5 1.5 0 0 0 5 4.5v11.838A3.5 3.5 0 0 1 6.5 16H19V3H6.5ZM21 2a1 1 0 0 0-1-1H6.5A3.5 3.5 0 0 0 3 4.5v15A3.5 3.5 0 0 0 6.5 23H20a1 1 0 0 0 1-1V2Zm-2 16H6.5a1.5 1.5 0 1 0 0 3H19v-3Z'
			clipRule='evenodd'
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M7.114 4.543c.142 0 .257.115.257.257v2.057a.257.257 0 1 1-.514 0V4.8c0-.142.115-.257.257-.257ZM7.029 11.4c.142 0 .257.115.257.257v2.057a.257.257 0 0 1-.515 0v-2.057c0-.142.116-.257.258-.257ZM9.429 7.8c.142 0 .257.115.257.257v2.057a.257.257 0 0 1-.515 0V8.057c0-.142.116-.257.258-.257ZM9.857 8.743c0-.142.115-.257.257-.257h2.057a.257.257 0 0 1 0 .514h-2.057a.257.257 0 0 1-.257-.257ZM8.743 4.543c.142 0 .257.115.257.257v2.057a.257.257 0 1 1-.514 0V4.8c0-.142.115-.257.257-.257ZM8.657 11.4c.142 0 .257.115.257.257v2.057a.257.257 0 0 1-.514 0v-2.057c0-.142.115-.257.257-.257ZM17.314 4.543c.142 0 .257.115.257.257v2.057a.257.257 0 1 1-.514 0V4.8c0-.142.115-.257.257-.257ZM17.229 11.4c.142 0 .257.115.257.257v2.057a.257.257 0 1 1-.515 0v-2.057c0-.142.116-.257.258-.257ZM13.714 7.8c.142 0 .257.115.257.257v2.057a.257.257 0 1 1-.514 0V8.057c0-.142.115-.257.257-.257ZM14.743 7.8c.142 0 .257.115.257.257v2.057a.257.257 0 1 1-.514 0V8.057c0-.142.115-.257.257-.257ZM11.486 5.229c.142 0 .257.115.257.257v1.371a.257.257 0 0 1-.514 0V5.486c0-.142.115-.257.257-.257ZM12.686 5.229c.142 0 .257.115.257.257v1.371a.257.257 0 0 1-.514 0V5.486c0-.142.115-.257.257-.257ZM10.286 4.543c.142 0 .257.115.257.257v2.057a.257.257 0 0 1-.514 0V4.8c0-.142.115-.257.257-.257Z'
			clipRule='evenodd'
		/>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M12.771 6.002a.257.257 0 0 1-.26.255l-2.056-.019a.257.257 0 1 1 .005-.514l2.056.019a.257.257 0 0 1 .255.26ZM11.4 12.085c.142 0 .257.116.257.258v1.371a.257.257 0 1 1-.514 0v-1.371c0-.142.115-.258.257-.258ZM12.6 12.085c.142 0 .257.116.257.258v1.371a.257.257 0 1 1-.514 0v-1.371c0-.142.115-.258.257-.258ZM7.8 12.686c0-.142.115-.257.257-.257h2.057a.257.257 0 1 1 0 .514H8.057a.257.257 0 0 1-.257-.257ZM18.6 9.107a.257.257 0 0 1-.26.255l-2.057-.02a.257.257 0 0 1 .005-.513l2.057.018a.257.257 0 0 1 .255.26Z'
			clipRule='evenodd'
		/>
		<path
			fill='currentColor'
			d='M14.743 6.343a.514.514 0 1 1-1.029 0 .514.514 0 0 1 1.029 0ZM14.657 13.2a.514.514 0 1 1-1.028 0 .514.514 0 0 1 1.028 0ZM12.514 9.943a.514.514 0 1 1-1.028 0 .514.514 0 0 1 1.028 0ZM8.057 9.6a.514.514 0 1 1-1.028 0 .514.514 0 0 1 1.028 0ZM16.286 6.343a.514.514 0 1 1-1.029 0 .514.514 0 0 1 1.029 0ZM16.2 13.2a.514.514 0 1 1-1.028 0 .514.514 0 0 1 1.028 0Z'
		/>
	</svg>
)

export const XCircle: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		{...rest}
		className={`${className}`}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z'
			clipRule='evenodd'
		/>
		<path
			fill='currentColor'
			d='M7.687 8.954 8.9 7.742l7.394 7.393-1.212 1.212z'
		/>
		<path
			fill='currentColor'
			d='m15.161 7.714 1.212 1.212-7.446 7.447-1.212-1.212z'
		/>
	</svg>
)

export const PauseCircle: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		{...rest}
		className={`${className}`}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z'
			clipRule='evenodd'
		/>
		<path
			fill='currentColor'
			d='M9.429 7.714h1.714v8.572H9.429V7.714ZM12.857 7.714h1.714v8.572h-1.714V7.714Z'
		/>
	</svg>
)

export const Chat: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={20}
		height={20}
		fill='currentColor'
		{...rest}
		className={`${className}`}
	>
		<path
			fillRule='evenodd'
			d='M17.24 2.034H1.76V0h15.48v2.034ZM17.24 16.102h-7.036v-1.695h7.037v1.695ZM6.861 16.102H1.056v-1.695H6.86v1.695Z'
			clipRule='evenodd'
		/>
		<path
			fillRule='evenodd'
			d='M6.861 14.576V20h-1.76v-5.424h1.76ZM2.111 1.695v12.87H0V1.696h2.111ZM19 1.695v12.87h-2.111V1.696H19Z'
			clipRule='evenodd'
		/>
		<path d='M3.87 7.119h2.111v2.034h-2.11V7.119ZM8.093 7.119h2.11v2.034h-2.11V7.119ZM12.315 7.119h2.11v2.034h-2.11V7.119ZM6.685 18.644h1.408V20H6.685v-1.356ZM8.093 17.288H9.5v1.356H8.093v-1.356ZM9.5 15.932h1.407v1.356H9.5v-1.356Z' />
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h19v20H0z' />
			</clipPath>
		</defs>
	</svg>
)

export const LogOut: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={22}
		height={20}
		fill='currentColor'
		{...rest}
		className={`${className}`}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			d='M14 1a1 1 0 0 1 1-1h4a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-4a1 1 0 1 1 0-2h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4a1 1 0 0 1-1-1Z'
			clipRule='evenodd'
		/>
		<path
			fill='currentColor'
			d='M0 9h14v2H0V9ZM8 3h2v2H8V3ZM10 5h2v2h-2V5ZM12 7h2v2h-2V7ZM8 15h2v2H8v-2ZM10 13h2v2h-2v-2ZM12 11h2v2h-2v-2ZM14 9h2v2h-2V9Z'
		/>
	</svg>
)

export const Plus: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
		fill='currentColor'
		{...rest}
		className={`${className}`}
	>
		<path d='M7.5 0h2.323v17.419H7.5z' />
		<path d='M0 9.75V7.427h17.419V9.75z' />
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h18v18H0z' />
			</clipPath>
		</defs>
	</svg>
)

export const Send: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1.5em'
		height='1em'
		{...rest}
		className={`${className}`}
	>
		<path
			fill='currentColor'
			d='M0 .667h1.412V4H0V.667ZM5.647 8H7.06v8H5.647V8Z'
		/>
		<path
			fill='currentColor'
			d='M7.059 9.333V8h2.823v1.333H7.06ZM9.882 8V6.667h2.824V8H9.882ZM12.706 6.667V5.333h2.823v1.334h-2.823ZM22.588.667H24V4h-1.412V.667ZM5.647 16v-1.333h5.647V16H5.647Z'
		/>
		<path
			fill='currentColor'
			d='M0 1.333V0h24v1.333H0ZM21.177 4h1.411v1.333h-1.412V4ZM19.765 5.333h1.412v1.334h-1.412V5.333ZM18.353 6.667h1.412V8h-1.412V6.667ZM16.941 8h1.412v1.333H16.94V8ZM15.53 9.333h1.411v1.334H15.53V9.333ZM14.118 10.667h1.411V12h-1.411v-1.333ZM12.706 12h1.412v1.333h-1.412V12ZM11.294 13.333h1.412v1.334h-1.412v-1.334ZM9.882 14.667h1.412V16H9.882v-1.333ZM1.412 4h1.412v1.333H1.412V4ZM2.824 5.333h1.411v1.334H2.824V5.333ZM4.235 6.667h1.412V8H4.235V6.667Z'
		/>
	</svg>
)

export const Close: React.FC<Props> = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
		fill='currentColor'
		{...rest}
		className={`${className}`}
	>
		<path d='M.643 2.58 2.46.756l15.321 15.37-1.818 1.823z' />
		<path d='m16.072.645 1.817 1.824-15.431 15.48L.64 16.125z' />
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h18v18H0z' />
			</clipPath>
		</defs>
	</svg>
)
