package cc.sitec.rongyun.config;

import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

/**
 * @Package cc.sitec.rongyun.service
 * @author keeley
 * @date 2018/18/10/8/13:36
 * @version V1.0
 */

@Configuration
public class Content implements EnvironmentAware {
	public static String appKey;
	public static String appSecret;

	@Override
	public void setEnvironment(Environment environment) {
		appKey = environment.getProperty("rongyun.appKey");
		appSecret = environment.getProperty("rongyun.appSecret");
	}
}
