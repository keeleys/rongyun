package cc.sitec.rongyun.bean;

/**
 *
 * @Author keeley
 * @Date 18/10/8 14:16 
 */
public class Result {
	private final int code;
	private final String message;

	public int getCode() {
		return code;
	}

	public String getMessage() {
		return message;
	}

	private Result(int code, String message) {
		this.code = code;
		this.message = message;
	}
	public static Result success(String message){
		return new Result(200, message);
	}
	public static Result error(int code, String message){
		return new Result(code, message);
	}
}
